const  nums = [555,901,482,1771]

let count = 0;

nums.forEach(el=>{
    el.toString().length % 2 === 0 ? count++ : null; 
})

console.log(count)