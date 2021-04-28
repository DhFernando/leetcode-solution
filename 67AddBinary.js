const a = "11", b = "1"
let reverce_a = [...a].reverse().map(el => { return  parseInt( el ) } );
let reverce_b = [...b].reverse().map(el => { return  parseInt( el ) } );

console.log(reverce_a);
console.log(reverce_b);

let main;
let secondary;
if (reverce_a.length > reverce_b.length) { main = reverce_a; secondary = reverce_b }
else { secondary = reverce_a; main = reverce_b }

let balance = 0;
let result = []

for (let i = 0; i < main.length; i++) {
    if (secondary[i] != undefined ) {  
        if (main[i] + secondary[i] === 1 ) {
            result.push(1)
        } else if (main[i] + secondary[i] === 0) {
            if (balance === 0) {
                result.push(0);
            } else {
                result.push(1)
                balance--
            }
        } else if ((main[i] + secondary[i] > 1)) {
            result.push(0);
            balance++;
        }
    } else { 
        if(balance === 0){
            if (main[i] === 1) {
                result.push(1);
            } else{ 
                result.push(0);
            }  
        }else{
            if (main[i] === 1) {
                result.push(0);
            } else{ 
                result.push(1);
                balance--
            }  
        }  
    }
    if( i === main.length - 1 && balance > 0){
        while (balance != 0) {
            result.push(1)
            balance--;
        }
    }
}

console.log( 

    result.reverse().map(el => { return el.toString() }).join('')

 )