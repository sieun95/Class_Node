const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const auth2 = (str, req, res, next) => {
    console.log('hello world')
    const data = req.headers.authorization.split('Basic')[1].trim()

    console.log(Buffer.from(data, "base64").toString('utf8'))
    
    // token JWT
    // Bearer [JWT]

    next()
};

app.use((req, res, next) => {
    auth2('hello World!!!!!', req, res, next) 
});

const auth = (req, res) => {
    res.send('hello world')
}


app.get('/', auth)

app.listen(3500, () => {
    console.log('http://localhost:3500')
})

/**
 * 게시판 회원만 가능한 게시판을 구현하고싶다
 *                                              
 *                                              OAuth2.0 -> authorizaitom / JWT / CORS
 * client front-server          back-server     auth-server
 * 
 * cookie-> 화면
 *       <- 화면
 * data request --------> cookie 잘 살펴 봅니다
 *              <--------
 */



/*
 
URL auth

host

protocol + auth + hostname + port
http://web772:1234@localhost:3005

http request message
Authorization < header 내용추가.
 
 */