const mat = [[1,1,1,1],
[1,1,1,1],
[1,1,1,1],
[1,1,1,1]]

              let spredArr = []


for (let i = 0; i < mat.length; i++) {
    const element = mat[i];
    spredArr = [...spredArr , ...mat[i]]
}



if(spredArr.length===1){
    return spredArr[0]
}else{
    let j = 0

let sum = 0
 

//left asiox
let index = 0;
do{
    sum = sum + spredArr[index]
    index = index+1 + mat[0].length
    if(index == spredArr.length-1){
        sum = sum + spredArr[index]
    }
}while(index != spredArr.length-1)
 


let indexL = 0;
let sum2 = 0;

while( indexL != spredArr.length - mat[0].length ){
    indexL = indexL + mat[0].length - 1
    // console.log(mat[0].length)
    sum2 = sum2 + spredArr[indexL] 
}

if(mat[0].length%2 != 0){
    sum2 = sum2 - mat[ Math.trunc(mat[0].length/2)][ Math.trunc(mat[0].length/2)]
}

return (sum2 + sum);
}


  