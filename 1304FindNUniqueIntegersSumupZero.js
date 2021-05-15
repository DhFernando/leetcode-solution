const n = 1;

let arr = []

for (let i = 1; i <= Math.abs(n/2); i++) {
    arr = [ ...arr , i , -1*i ]
}

if(n%2 === 0){
    console.log( [ ...arr ] )
}else{
    console.log( [ ...arr , 0] )
}