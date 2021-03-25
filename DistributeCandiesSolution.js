var distributeCandies = (candyType) => { 
     
    let unique = candyType.filter((item, i, ar) => ar.indexOf(item) === i); 

    if(unique.length <= candyType.length/2){
        return unique.length;
    }else{
        return candyType.length/2;
    }
};

const res = distributeCandies([6,6,6,6])

console.log(res)



