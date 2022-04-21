const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})

app.use(express.urlencoded({extended:true,}))
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/getCookie', (req, res) => {
    console.log(req.body)
    res.send('안녕하세요 쿠키입니다.')
})

app.listen(4000, () => {
    console.log('front server run')
})