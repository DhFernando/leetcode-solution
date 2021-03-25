const jewels = "zgT"
const stones = "ZzZgz"

let count=0 ;

for (let j = 0; j < jewels.length; j++) { 
    for (let s = 0; s < stones.length; s++) { 
        if(jewels[j] === stones[s]){
            count ++;
        }
    }
}
return count