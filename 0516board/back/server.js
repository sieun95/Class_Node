const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const cors = require('cors');
const router = require('./routes');

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(cors({
//     origin:true,
//     credentials:true
// }));

app.use(router);

app.listen(3000, () => {
    console.log('http://localhost:3000 server run')
});
