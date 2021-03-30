let num = 3

let count = 0
while(num != 0){
     
        if(num%2 === 0){
            num = num/2
            count++
        }else{
            num--
            count++
        }
    
}

console.log(count)