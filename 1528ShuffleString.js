const s = "vttqexwqgdc"
const indices = [9,5,8,0,4,3,6,10,1,2,7]




let concat = []

for (let i = 0; i < indices.length; i++) {
    concat = [...concat , [indices[i], s[i] ]]
}
  let _string = ''

  const temp =concat.sort(function(a, b) {
    return a[0] - b[0];
  })

 for (let j = 0; j < temp.length; j++) {
     const el = temp[j][1];
     _string = _string + el
 }

console.log( _string );

 