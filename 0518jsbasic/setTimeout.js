// 1. 함수 콜백
// 2. 시간

console.log('hello!!')
function callback(){
    console.log('world')
}
setTimeout(callback, 0)
console.log('sieun')

// 선언이 되어있는거는 힙에들어간다
// hello!! -> sieun -> world