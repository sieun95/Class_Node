세션은 서버
쿠키는 브라우저

세션도 쿠키가 생성가능하다
// 구분값을 쿠키로 활용
// 세션 쿠키

{
    쿠키 : 쿠키
    세션 : 쿠키 + 세션
}

{
    데이터를 계속 가지고 다녀야한다.
    ?idx=1 url없이 데이터를 전달해준다.
}
{
    http 통신프로토콜에서 
    set-Cookie 에 대한 무버빙 다로 존재한다.
    그녀석만 지켜주면서 작성하면 httponly
}

{
    로그인을 했는데 5분뒤에 로그인 풀려,
    5분뒤에 쿠키가 사라지면됨,

    Expires : 짧은시간 5분 10분
    
    60 * 1000
    내가 요청으로 들어온 쿠키를 어디서든 볼수있게
}