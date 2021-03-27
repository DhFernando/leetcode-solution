const allowed = "cad"
const words = ["cc","acd","b","ba","bac","bad","ac","d"]

let final = 0

words.forEach(el => {
    let temp  = null;
    for (let i = 0; i < el.length; i++) {
        console.log(allowed.indexOf(el[i]))
            if(temp != false){
                if(allowed.indexOf(el[i])  >= 0 ){
                
                    temp = true;
                }else{
                    temp = false;
                } 
            }
        
    }  

    if(temp) final++

    // console.log(final)
});

console.log(final)




