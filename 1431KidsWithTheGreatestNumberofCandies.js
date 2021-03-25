const _candies = [2,3,5,1,3]

const candies2 = [2,3,5,1,3];
const extraCandies = 3

const gradersCandy = [..._candies.sort(function(a, b) {
    return a - b;
  })][_candies.length -1]


let outpit = []
 

for (let i = 0; i < candies2.length; i++) {
    const element = candies2[i] + extraCandies ; 
    if(element >= gradersCandy){
       
        outpit = [...outpit , true]
    }else{
        outpit = [...outpit , false]
    }
}

console.log(outpit)