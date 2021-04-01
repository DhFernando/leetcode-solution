const nums = [1,2,3,4]

let out = []
    for (let i = 0; i , i < nums.length - 1; i += 2) {
        out = [...out, ...Array(nums[i]).fill(nums[i + 1])]
    }
    return out  