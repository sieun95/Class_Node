const express =  require('express');
const pool = require('./db');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/get', async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM testKey`)
    console.log(result)
    res.send(result)
})

app.post('/post', async (req, res) => {
    const [result] = await pool.query(`INSERT INTO testKey(user, pwd) VALUES('user', 'pwd')`)
    console.log(result)
    res.send(result)
})

app.listen(3000, () => {
    console.log('http://localhost:3000 server')
});