const  gain = [-5,1,5,0,-7]
let alt = [0]
gain.forEach((el , i) =>alt = [ ...alt ,  el + alt[i] ]);
console.log([...alt.sort((a, b)=>{return a - b})][ alt.length - 1 ])

// x[] - 0 = -5
// x2 