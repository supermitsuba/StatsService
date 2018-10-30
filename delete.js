const mysql = require('mysql')

const mysqlConfig = {
    host     : "",
    database : "",
    user     : "",
    password : ""
}
const pool = mysql.createPool(mysqlConfig)

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

executeQuery("DELETE FROM iot.stats WHERE createdTimestamp < NOW() - INTERVAL 30 DAY", 
    null, 
    () => { console.log('ok');process.exit() }, 
    () => { console.log('fail');process.exit() });
