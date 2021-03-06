const express = require('express');
const app = express();


// cookie parser
app.use((req, res, next) => {
    const { cookie } = req.headers
    const cookies = cookie.split(';').map(v => v.trim().split('=')).reduce((acc,val) => {
        acc[val[0]]=val[1]
        return acc
    }, {})
    // reduce 솔직히 map, filter
    // 내가 배열인 상태의 애들을 객체로 변환할때만 reduce를 사용해라, 데이터 타입이 변할때만
    req.cookie = cookies
    next()
})

app.get('/', (req, res) => {
    res.send('hi')
    console.log(req.cookie)

})


app.get('/setCookie', (req, res) => {
    res.setHeader('Set-Cookie', 'name1=sieun1; httpOnly=true;')
    res.send('hello setCookie')
})


app.listen(3000, () => {
    console.log('http://localhost:3000 server run')
})

