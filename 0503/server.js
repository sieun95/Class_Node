const express = require('express')
const app = express()
const router = require('./routes')  // routes폴더안에 index.js 이게 디폴트다 폴더로 이동하면 그 폴더안에 있는 index.js를 실행시킨다
const nunjucks = require('nunjucks')    // view engine

app.use(express.urlencoded({extended:true})) // request message body req.body 이렇게 해야만 req.body에 있는 url를 읽을수 있다
// extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는다는 뜻 이다.
app.set('view engine', 'html')      // 이거도 그냥 이렇게 생긴 틀 이다
nunjucks.configure('views', {
    express:app,
})

app.use(router) // use를 쓰고 어떤조건도 적지않으면 무조건 사용하겠다는 뜻이다


app.listen(3000, () => {
    console.log('server run')
})