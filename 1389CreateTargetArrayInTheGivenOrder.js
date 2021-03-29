const index = [0,1,2,2,1]
const nums = [0,1,2,3,4]

let res = []

for (let i = 0; i < index.length; i++) { 
    res.splice(index[i], 0, nums[i]);
}

return res
