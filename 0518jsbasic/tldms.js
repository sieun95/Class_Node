const time = () => (parseInt(Math.random() * 10)+1)*300


// const a = () => {
//     console.log("tsdaf")
// }
// a()

const tldms = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('tldms end')
        },time())
        console.log('tldms go')
    })
}

// tldms().then((a)=>{
//     console.log(a)
// })


async function main(){
    console.log('경기시작')
    const result = await tldms()
    console.log(result)

    console.log('경기끝')
}

main()