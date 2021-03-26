const arr = [1,4,2,5,3]

let res =0 
for (let i = 1; i < arr.length; i++) { 
    arr[i] += arr[i-1]
}

for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end +=2) {
        res += sumBetween(start,end)
    }
}
console.log(res)
function sumBetween(start,end){
    return arr[end] - (arr[start-1]||0)
}

