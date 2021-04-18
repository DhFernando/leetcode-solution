const A = [3,1,2,4]

let l = [] , r = []

A.forEach(el => {
    if(el%2 === 0){
        l.push(el)
    }else{ r.push(el) }
});

console.log( [ ...l , ...r ] )