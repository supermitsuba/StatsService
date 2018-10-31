const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

const mysqlConfig = {
    host     : "localhost",
    database : "database",
    user     : "user",
    password : "password"
}
const pool = mysql.createPool(mysqlConfig)

app.get('/metrics', (req, res) => {
    var parameters = [req.query.type, req.query.name, req.body.limit]
    var statement = 'SELECT * FROM iot.stats where type=? and nameOfMachine=? order by createdTimestamp desc limit ?';
    executeQuery(statement, parameters, 
        (data) => {
            res.set("Connection", "close")
            res.send(data)
            res.end()
        }, (error) => {
            console.log(error)
            res.set("Connection", "close")
            res.sendStatus(500).send('ok').end()
    })
})

app.get('/metrics/type', (req, res) => {
    var statement = 'select DISTINCT type from stats';
    executeQuery(statement, null, 
        (data) => {
            res.set("Connection", "close")
            res.send(data)
            res.end()
        }, (error) => {
            console.log(error)
            res.set("Connection", "close")
            res.sendStatus(500).send('ok').end()
    })
})

app.post('/stat', (req, res) => {
    var parameters = [req.body.type, req.body.value, req.body.dateOfOccurance, req.body.nameOfMachine]
    var statement = 'INSERT INTO stats (type, value, dateOfOccurance, nameOfMachine) VALUES (?,?,?,?);'

    executeQuery(statement, parameters, 
        (data) => {
            res.set("Connection", "close")
            res.send('ok')
            res.end()
        }, (error) => {
            console.log(error)
            res.set("Connection", "close")
            res.sendStatus(500).send('ok').end()
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function executeQuery(statement, 
    parameters, 
    success, 
    fail) {

    pool.getConnection(function(error, conn){
        if(error){
            error.message += " Here is the entity: "+ JSON.stringify(parameters)
            console.log(error.message)
            return fail(error)
        }

        conn.query(statement, parameters, function(err, results){
            conn.release()
            if(err){
                err.message += " Here is the entity: "+ JSON.stringify(parameters)
                console.log(err.message)
                return fail(err)
            }
            
            return success(results)
        })
    })
}