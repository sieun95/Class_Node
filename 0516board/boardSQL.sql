USE board;

DROP TABLE board;

CREATE TABLE board(
    `idx` INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `subject` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL
);

INSERT INTO board(subject, content) VALUES('test subject', 'test content');

SELECT * FROM board;

CREATE TABLE userInfo(
    `idx` INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `userId` VARCHAR(255) NOT NULL,
    `userPwd` INT(11) NOT NULL
);

SELECT * FROM userInfo;

INSERT INTO userInfo(userId, userPwd) VALUES('test ID', '1234');
