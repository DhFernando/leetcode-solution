const x = -1230
let _x = Number([...Math.abs(x).toString()].reverse().join(''))

console.log(
    x >= 0 ? _x : -1*_x
)