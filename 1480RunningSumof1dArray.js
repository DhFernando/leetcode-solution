const nums = [1,2,3,4]

let sumArray = []

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(i===0){
        sumArray.push(nums[i])
    }else{
        sumArray = [ ...sumArray , nums[i] + sumArray[sumArray.length - 1] ]
    }
    
}

console.log(sumArray)