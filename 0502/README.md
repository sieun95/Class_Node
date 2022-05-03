module > nodejs 내장객체이고,
module.exports 객체는 결과물을 저장하는 공간이다.

require 역활은 내가 가지고오고싶은 파일의 module.exports 안에 있는 객체를 가져오는애입나디.

require()       // require return 값은 객체다
module.exports

node js 내장객체, 내장모듈
공식홈페이지

미들웨어 콜백형태

app.get('/', (req, res) => {
    res.send('hello world!')
})
express 가 미들웨어 app.get 2번째 인자가 미들웨어는 콜백이다

콜백함수를 왜쓸까?
내가 원하는 시점에 함수를 실행하고 싶어서 이게 디폴트

// express
router
middleware

// nodejs
module
module.exports
require

// javascript
callback

render
주소창에 쓴 method는 무조건 get
브라우저는 string을 받는다 문자열
테그를 받으면 브라우저가 해석을 해준다

res.json res.send랑 같은데 jsondms string으로 바꿔서 보내준다

res.render
