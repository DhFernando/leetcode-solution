const image = [[1,1,0],[1,0,1],[0,0,0]]

let reverse = []

image.forEach(el => {
    let temp = []
    el.reverse().forEach(_el =>{
        _el === 1 ? temp = [...temp , 0] : temp = [...temp , 1]
    })
    reverse = [ ...reverse , temp ]
});
console.log(reverse);
if( reverse === [[1,0,0],[0,1,0],[1,1,1]] ){ console.log("L") }