INSERT INTO board(subject, name) VALUES('2222', '2222');
INSERT INTO board(subject, name) VALUES('4444', '4444');

SELECT * FROM board;

UPDATE board SET subject='tldms' WHERE idx=1;

DELETE FROM board WHERE idx=1; 