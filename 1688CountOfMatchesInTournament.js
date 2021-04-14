let  n= 14

let sum = 0

while( n >= 2 ){
    if(n%2 === 0){
        sum = sum + n/2
        n = n/2

    }else{
        sum = sum + (n-1)/2
        n = (n-1)/2 + 1
    }
}      

console.log( sum )