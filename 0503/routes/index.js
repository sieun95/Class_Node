const express = require('express')
const router = express.Router() // router에 express안에 들어있는 Router()라는 내장함수를 넣어준다
const boardRouter = require('./board') // board라는 폴더안에 index.js 불러오는거다

router.get('/', (req, res) => {
    res.render('index')
})

router.use('/board', boardRouter)   // router 안에 router를 넣을수있다
                                    // 여기서는 board에서 사용할 router를 따로 관리할거다
module.exports = router