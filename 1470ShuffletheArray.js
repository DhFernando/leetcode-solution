const nums = [1,2,3,4,4,3,2,1]
const n = 4

let xArray = []
let yArray = []
let res = []

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if( i <= n-1){
        xArray.push(element)
    }else{
        yArray.push(element)
    }
}

for (let j = 0; j < n; j++) {
    console.log(j)

    res = [ ...res , xArray[j] , yArray[j]]
    
}

return res;