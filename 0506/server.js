const express = require('express');
const app = express();
const router = require('./router')
const nunjucks = require('nunjucks');

app.set('view engine', 'html')    
nunjucks.configure('views', {
    express:app,
})

app.use(router)

app.listen(3000, () => {
    console.log('http://localhost:3000 server run')
})