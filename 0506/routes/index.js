const express = require('express');
const router = express.Router();
const boardRouter = require('./board');

router.use('/board', boardRouter);


router.get('/', (req, res) => {
    res.send('hello world!')
})

module.exports = router;