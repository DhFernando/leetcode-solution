const num = 5

let num_str = num.toString()

let func = (arr)=> { 
    let res = 0
    for (let i = 0; i < arr.length; i++) {  
        res = res + parseInt(arr[i])
    }
    return res
}

let sum = func(num_str)

let a = []
let result = 0

while(true){
    sum = func(sum.toString())
    if(sum.toString().length === 1 ){
        result = sum;
        break;
    }
}

return result;



