const express = require("express")
const app = express()       // app 객체
const router = require('./routes')
const nujucks = require("nunjucks")

app.set()
// app.get('/'), app.post('/')
// next 미들웨어에 세번째 인자값에 대해서
// app.use() 어떤 request method path든 다 받겠다 상관안하겠다 모든 요청에 실행하겠다
app.use(express.urlencoded({extended: true})) // req.body   //미들웨어
// req.body 

app.use('/', (req, res, next) => {
    // res.send('hello world!')
    console.log('hello next')
    next()
})
// next를 사용하는 이유는 다음 router에 전달하기위해서


// GET, POST 애는 request method 
// 
app.get('/', (req, res) => {
    res.send('hello world')
});
// 방 문을 열고 들어오 ㄹ 손님을 기다리는 겁니다. 요청하는 사람이 GET인 사람만, path가 /인 사람

// url 패턴


// express app 객체안에 있는 method 중에 get, post, use, ...
// 클라이언트가 요청을하면 서버는 요청한대로 응답을 주는애 http -> string

app.listen(3000, () => {
    console.log('서버 시작')
})