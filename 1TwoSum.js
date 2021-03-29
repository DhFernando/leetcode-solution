const nums = [2,7,11,15]
const target = 9

let res = []

for (let i = 0; i < nums.length; i++) { 
    for (let j = 0; j < nums.length; j++) {    
        if(nums[i] + nums[j] === target && i != j){ 
            res = [...res , i , j]
            return res;
        }
    }
}
 