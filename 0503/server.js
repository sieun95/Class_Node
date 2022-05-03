const express = require('express')
const app = express()
const router = require('./routes')  // routes폴더안에 index.js
const nunjucks = require('nunjucks')

app.use(express.urlencoded({extended:true})) // request message body req.body 

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})

app.use(router)


app.listen(3000, () => {
    console.log('server run')
})