const sentence = "thequickbrownfoxjumpsoverthelazydog";
const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('')

let res = true

let arr =  sentence.split(' ')

let newSen = ''

arr.forEach(el => {
    newSen = newSen + el
});

newSen = newSen.toLowerCase().split('');

alphabet.forEach(el =>{
    if( newSen.indexOf(el) === -1 ) {
        res = false
        return
    }
})

console.log( res ) 

