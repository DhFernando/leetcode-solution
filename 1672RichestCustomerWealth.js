const accounts = [[1,5],[7,3],[3,5]]

const worth = []

for (let acc = 0; acc < accounts.length; acc++) { 
    worth.push(accounts[acc].reduce((a, b) => a + b, 0)) 
    
    
}
const sorted = worth.sort(function(a, b) {
    return a - b;
  }) 
console.log(sorted[worth.length -1 ])

// console.log( [1, 2, 3, 5].reduce((a, b) => a + b, 0) )