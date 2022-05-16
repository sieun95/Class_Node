const express =  require('express');
const pool = require('./db');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/get', async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM testKey`)
    console.log(result)
    res.send(result)
})

app.post('/post', async (req, res) => {
    const [result] = await pool.query(`INSERT INTO testKey(user, pwd) VALUES('user', '123')`)
    console.log('post result : ' + result)
    res.send(result)
})

app.post('/test', async (req, res) => {
    const [result] = await pool.query(``)
    console.log('test result : ' + result)
    res.render('/test')
})

app.listen(3000, () => {
    console.log('http://localhost:3000 server')
});