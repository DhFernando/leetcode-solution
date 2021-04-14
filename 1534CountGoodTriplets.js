const arr = [1,1,2,2,3], a = 0, b = 0, c = 1
let count = 0
for (let i = 0; i < arr.length; i++) {
   for (let j = i+1; j < arr.length; j++) {  
       if( Math.abs(arr[i] - arr[j]) <= a ){ 
           for (let k = j+1; k < arr.length; k++) {
                if(Math.abs( arr[j] - arr[k] ) <= b &&  Math.abs( arr[i] - arr[k] ) <= c ){
                    // console.log('called')
                    count ++
                }
           }
       }
   } 
}

return count;