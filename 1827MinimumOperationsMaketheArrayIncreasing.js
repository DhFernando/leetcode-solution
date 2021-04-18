const nums = [1,5,2,4,1]

let count = 0

console.log(nums.length)

if(nums.length <= 1){
    (count = 0)
} else{  
    for (let i = 0; i < nums.length -1 ; i++) {
        if( nums[i] >= nums[i+1] ){
            count = count + nums[i] - nums[i+1] + 1
            nums[i+1] = nums[i] + 1
        }    
    }
}
 

console.log( count )






