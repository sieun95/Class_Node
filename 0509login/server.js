const express = require('express');
const app = express();


// crud - 데이터의 이동흐름
// login - 웹에 흐름을 이해

// cookie
// jwt


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
    console.log(req.cookie)
    res.send('hello world')

});

app.get('/cookie', (req, res) => {
    console.log(req.cookie)
    res.send('hello cookie')
})


app.get('/setCookie', (req, res) => {
    // res.setHeader('Set-Cookie', 'name=sieun; httpOnly=true; max-age='+time + 'path = /cookie')
    res.setHeader('Set-Cookie', 'name1=sieun; httpOnly=true;')
    
    res.send('hello setCookie')
})

app.listen(3000, () => {
    console.log('http://localhost:3000 server run')
})