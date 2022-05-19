const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const cors = require('cors')

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})

app.use(cors({
    origin:['http://localhost:4000'],
    credentials: true,
}))

app.get('/', (req, res) => {
    // res.setHeader('Set-Cookie', 'test=cookie')
    res.render('index')
})

app.get('/getCookie', (req,res) => {
    // res.setHeader('Access-Control-Allow-Origin','http://localhost:4000')
    // res.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS, DELETE') // methods 사용여부
    // res.setHeader('Access-Control-Allow-Credentials','true')
    // res.setHeader('Access-Control-Allow-Headers','Content-type')
    res.setHeader('Set-Cookie', 'test=true')
    res.send('hi~~')
})

app.listen(3000, () => {
    console.log('back server run')
})