const express = require('express');
const router = express.Router();
const boardRouter = require('./board');
const userInfoRouter = require('./userInfo');

router.get('/', (req, res) => {
    res.render('index')
});

router.use('/board', boardRouter);

router.use('/userInfo', userInfoRouter);

module.exports = router;