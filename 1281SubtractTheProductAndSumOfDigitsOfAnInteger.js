const n = 234

const n_str = n.toString()
let multiply= 1
let sum = 0

for (let i = 0; i < n_str.length; i++) {
    sum = sum + parseInt( n_str[i] )
    multiply = multiply*parseInt(n_str[i] )
}

return (multiply-sum)