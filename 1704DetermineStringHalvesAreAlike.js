const s = "AbCdEfGh"
let a = 0, b = 0
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
for (let i = 0; i < s.length; i++) {
    if( i < s.length/2 ){
        if( vowels.indexOf(s[i]) >= 0 ) a++
        
    }else{
        if( vowels.indexOf(s[i]) >= 0 ) b++
    }
}

if( a === b ) console.log('true')
else console.log('false')