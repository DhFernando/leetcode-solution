const n = 4
const start = 3

let res= 0 ;

for (let i = 0; i < n; i++) {
    res = res ^ (start + i * 2);
}

return res;

