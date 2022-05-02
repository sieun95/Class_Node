# node.js

라이브러리, 패키지, 프레임워크

패키지 === 라이브러리
폴더안에 프로그램관련된 파일이 잔뜩 담겨져있는거,

ingoo express hello world!

프레임워크
딱딱 정해준 디렉토리가 있는것들,

npx create-react-app
src 
    프레임워크

express : 라이프러리, 패키지

express : http 서버를 편하게 만들어주는 라이브러리

http

서버 

애플코딩

일단쳐요, 동작원리 설명

input output
학습 시간을 단축할수있다.


서버

서버는 서빙하는 사람이다.
찐따, 일진이시키면 시키는 대로만 해야된다.

client 중국인

우리 공통언어 만들자 프로토콜
http 프로토콜

server 한국인


client 빵사와,
server 빵을사와
module > nodejs 내장객체이고,
module.exports 객체는 결과물을 저장하는 공강이다.

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
