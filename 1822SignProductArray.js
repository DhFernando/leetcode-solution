const nums = [1,5,0,2,-3]

let temp = 1
nums.forEach(el => {
    temp = temp*el
    console.log(temp)
});

console.log(nums.indexOf(0)) 
if( nums.indexOf(0) != -1  ){ return 0 }
else if( temp > 1 ){ return 1 }
else if( temp < 1 ){ return -1 }
