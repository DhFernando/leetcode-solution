const nums = [7,7,7,7]

let output = []

for (let i = 0; i < nums.length; i++) { 
    let count = 0;
    nums.forEach(el => {
        if(nums[i]>el){
            count++;
        }
    });
    output = [...output, count]
}

return output;