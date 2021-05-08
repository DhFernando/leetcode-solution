const s = "v0g6s4d"
const alp = [...'abcdefghijklmnopqrstuvwxyz'];

const arr = [...s]

arr.forEach((el, index) => {
  if (parseInt(el) >= 0) { 
    arr[index] =   alp[ alp.indexOf(arr[index - 1 ]  )  +  parseInt(el)]
  } 
});

console.log( arr.join('') )
