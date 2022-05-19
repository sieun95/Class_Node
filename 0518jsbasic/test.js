const time = () => (parseInt(Math.random() * 10)+1)*300

// cb: ()=>{}
const 아반떼 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('아반떼 end')
        },time())
        console.log('아반떼 go')
    })
}

// promise


const 소나타 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('소나타 end')
        },time())
        console.log('소나타 go')
    })
}

const 제네시스 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('제네시스 end')
        },time())
        console.log('제네시스 go')
    })
}


// javascript tab 4 tab 2


// 아반떼( ()=>{ 
//     소나타(()=>{
//         제네시스(()=>{
//             console.log('경기끝!')
//         })
//     }) 
// })


// 아반떼()
// .then(data=>{ 
//     console.log(data)  
//     return 소나타()
// })
// .then(data=>{
//     console.log(data)
//     return 제네시스()
// })
// .then(data=>{
//     console.log(data)
//     console.log('경기끝')
// })

async function main(){
    console.log('경기시작')
    const result = await 아반떼()
    console.log(result)
    const result2 = await 소나타()
    console.log(result2)
    const result3 = await 제네시스()
    console.log(result3)
    console.log('경기끝')
    return 'a'
}

main().then( data=>{
    console.log(data)
} ) 



// javascript 가 promsie 만들고 와 시발 나쩐듯 ? 이걸생각하네. 

// async await 

// callback 지옥 

// javascript 생각했음..

// 우리 비동기코드 하나더만들까? 
// promise 

// async / await 


/*
             ?                 ?                  ?
경기시작 아반떼 go end -> 소나타 go end -> 제네시스 go end 경기끝 

경기시작
아반떼 go
소나타 go
제네시스 go
소나타 end
아반떼 end
제네시스 end
경기종료
*/


// promise -> callback 지옥을 벗어나고싶다! 

// 객체~~

const a = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('aaaa')
    },1000)
})
