DROP TABLE testKey;

SELECT * FROM `testKey`;

CREATE TABLE testKey (
    `idx` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user` VARCHAR(255),
    `pwd` INT(11)
);

INSERT INTO testKey(user, pwd) VALUES('test', '1234');