const nums =  [10,2,5,2]
 
console.log(nums.sort());

console.log( ([...nums.sort(function(a, b) {
    return a - b;
  })][ nums.length - 1 ]-1) * ([...nums.sort(function(a, b) {
    return a - b;
  })][ nums.length - 2 ] - 1) )