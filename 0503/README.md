
    이번주내에 게시판 만들기 DB까지

    1. 화면부터 만들줄 알아야됨
    2. 버튼 2개 (
        제목 view로 가는거, 
        글쓰기 write로 가는거,
        )
    3. 게시판 view (뒤로가기, 수정하기, 삭제하기)
    4. 게시판 글쓰기 (등록하기, 목록가기)
    5. 게시판 수정
    수정, 목록가기

    request method 
    get, post

    api 설계서
    http://localhost:3000 / [path]
    화면에 보이는거 get
    GET /board/list
    GET /board/view
    GET /board/write
    GET /board/update

    POST /board/delete
    POST /board/write
    POST /board/update

    리스트 라이트 뷰
    라우터 먼저


form
method
action
enctype

브라우저 - 요청보내고 응답을 받는다


익스프레스 - 요청을 받고 응답 보내기