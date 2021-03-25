const ip = "255.100.50.0"

const splitedIp = ip.split('.')
let output = '';

for (let i = 0; i < splitedIp.length; i++) {
    const element = splitedIp[i];
    if(i === splitedIp.length-1){
        output = output + element 
    }else{
        output = output + element + '[.]'   
    }
    
}

console.log(output)
