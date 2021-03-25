var findErrorNums = function(nums) {
    let shouldSort = !true;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(nums[i] > nums[i+1]){
            shouldSort = true;
        }
    }

    let numArr;

    if(shouldSort){
        numArr = [...nums].sort()
    }else{
        numArr = nums
    }

    for (let index = 0; index < numArr.length; index++) {
        if(numArr[index] === numArr[index+1]){
            if(index + 1 == numArr[index]){
                return [numArr[index] , nums[index]+1]
            }
            return [numArr[index] , numArr[index]-1]
        }
        
    }
    return null
};

const res = findErrorNums([3,2,2]);
console.log(res)




const yourArray = [3,2,2]

let duplicates = []
const x =[]


const tempArray = [...yourArray].sort()

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicates.push(tempArray[i])
  }
  x.push(i+1)
}

let missingNum;

x.forEach(element => {
    if(yourArray.indexOf(element) === -1){
        console.log(yourArray.indexOf(element))
        missingNum = element;
        console.log(element)
    }
    
});


console.log([duplicates[0] , missingNum])
// console.log(x)