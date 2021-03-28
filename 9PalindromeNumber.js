let x = 121
let strX = x.toString();

let f = []
let r = []

for (let i = 0; i < strX.length; i++) { 
    f = [ ...f , strX[i]]
}

for (let j = strX.length-1 ; j >= 0; j--) { 
    r = [ ...r , strX[j]]
}

if(f.toString() === r.toString()){
    return true
}else return false
    
















