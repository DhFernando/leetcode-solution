const s = "RLRRLLRLRL"

let res = 0;

var r_counetr = 0 ;
var l_counetr = 0 ;

for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if(el === 'R') {r_counetr++; }
    else {l_counetr++}
    
    if(r_counetr === l_counetr) {res++}

}

console.log(res)