const name = (callback) => {
    callback()
    return 'sieun'
}


const call = () => {
    console.log("call")
    return 'hello'
}

const send = () => {
    console.log('send')
    return 'world'
}
neme(send)


// 나는 call 이라는 함수가 , name이 실행되면 그때 call이 실행됬으면 좋겠습니다.
// 나는 send라는 함수가, name이 실해되면 그때 send가 실행됬으면 좋겠어요.

