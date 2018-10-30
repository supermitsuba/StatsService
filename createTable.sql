use iot;

CREATE TABLE `stats` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `value` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `dateOfOccurance` datetime DEFAULT NULL,
  `nameOfMachine` varchar(50) DEFAULT NULL,
  `createdTimestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

