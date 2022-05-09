const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let answer = 0;
for (let i = 0; i < a.length; i++) {
    answer += a[i]
}

const result = a.reduce((acc, val) => {
    return acc + val
}, '')

const b = [1,2,3,4];
b.map((v) => {
    console.log(v)
    return 
})