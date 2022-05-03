const express = require('express')
const router = express.Router() //객체



router.get('/user', (req, res) => {
    res.send('router~~~')
})

router.get('/board/view', (req, res) => {
    res.render()
})

/*
내용을 보낼때, 응답을 해줄때는 무조건 string...

res.send
res.render
1. 일단 파일안에 있는 모듵 텍스트를 가져온다
2. 텍스트중 nunjucks 문법을 체크한다음에 
3. nunjucks 에 관련된 모든 코드를 처리하고 string으로 변환한다.
4. res.send 로 response body영역에 완성본을 보낸다.
res.send(...text) 

res.json

*/


module.exports = router