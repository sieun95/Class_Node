const express = require('express')
const router = express.Router()
const boardContoller = require('./board.controller')    // {list:list} 객체로 담아온다

router.get('/list', boardContoller.list)
router.get('/view', boardContoller.view)
router.get('/write', boardContoller.write)
router.get('/update', boardContoller.update)

router.post('/write', boardContoller.writeAction)

module.exports = router