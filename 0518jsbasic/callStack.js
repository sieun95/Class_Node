// function main(){
//     fn2()
//     console.log('main')

//     function fn2(){
//         console.log('fn2')
//         fn3()
//     }
//     function fn3(){
//         console.log('fn3')
//         fn4()
//     }
//     function fn4(){
//         console.log('fn4')
//         fn5()
//     }
//     function fn5(){
//         console.log('fn5')
//         fn6()
//     }
//     function fn6(){
//         console.log('fn6')
//     }
// };

// main();

function ingoo() {
    console.log('3')
    return 4
}

function goak() {
    console.log('1')
    return ingoo()  //4
}

function hello(callback) {
    // callback = goak
    goak() // 1
    console.log('5')
    callback('6')
}
  
const result = ingoo()  // 4
hello(goak)
console.log(typeof result)

// callstack

