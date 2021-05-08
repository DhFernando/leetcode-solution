const x = -1230
let _x = Number([...Math.abs(x).toString()].reverse().join(''))
x >= 0 ? _x : _x = -1*_x 

if(Math.pow(2, 31)-1 < _x ||  -Math.pow(2, 31)-1 > _x ) {
    return 0
}else return _x