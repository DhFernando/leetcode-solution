const num = 9669

let arr = [...num.toString()] 
let currentMax = num;

arr.forEach((el , i) => {
    let arr2 = [...arr]
    arr2[i] = (parseInt(el) === 6 ? 9 : 6)

    let _num = '' ;
    arr2.forEach(_el => _num = _num + _el )
    if( parseInt( _num ) > currentMax ) currentMax = parseInt( _num )  
});
console.log( currentMax )
