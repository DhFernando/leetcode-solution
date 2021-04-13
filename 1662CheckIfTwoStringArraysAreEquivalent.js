const word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]

let W1 = '', W2=''

word1.forEach( el => W1=W1+el )
word2.forEach( el => W2=W2+el )

// if(W1 === W2) return true 
// else return false

if(W1 === W2) console.log('true') 
else console.log('false')