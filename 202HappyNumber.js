const n = 2

let n_str = n.toString()

let func = (arr)=> { 
    let res = 0
    for (let i = 0; i < arr.length; i++) {  
        res = res + parseInt(arr[i])*parseInt(arr[i])
    }
    return res
}

let old = func(n_str)
let newOne = []

let x = false


while (true) {
   if(newOne.indexOf(old) == -1){
       if(old === 1){ 
           x = true
           break;
       }
       
    newOne = [...newOne , old]
    old = func(old.toString())
   }else{ 
    x = false
    break;
   }
}

return x
 




