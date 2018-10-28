use iot;

CREATE TABLE stats (
    id              BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    value           varchar(50), 
    type            varchar(50),
    dateOfOccurance TIMESTAMP, 
    nameOfMachine   varchar(50)
);