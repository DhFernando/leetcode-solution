
const s = "chopper is not a tanuki", k = 5

const arr =  s.split(' ') 
let res = ''

for (let i = 0; i < k; i++) {
    res = res + `${arr[i]} `
}

console.log( res.substring(0, res.length - 1) )