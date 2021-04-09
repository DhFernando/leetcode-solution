const command = "G()(al)"
let str = ""
    let i = 0;
    while(i < command.length){
        if(command[i] === "(" && command[i+1] === ")"){
            str = str + "o"
            i = i + 2;
        }else if(command[i] === "(" && command[i+1] === "a"){
            str = str + 'al';
            i = i + 4;
        }else{
            str = str + 'G';
            i++
        }
    }
    console.log( str );