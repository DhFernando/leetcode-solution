const nums = [1,2,3]

let count = 0;

for (let i = 0; i < nums.length; i++) {
    for (let j = 1+i; j < nums.length; j++) {
        // console.log(j)

        if(nums[i] === nums[j]) count++;
    }
}

return count;