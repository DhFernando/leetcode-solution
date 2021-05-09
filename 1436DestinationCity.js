const paths = [["B","C"],["D","B"],["C","A"]]

var destCity = function(paths) {
    let dest = paths[0][1]
    while(true){
        const _newDest = paths.find(path => path[0] === dest)
        if(!_newDest) return dest
        dest = _newDest[1]
    }
};

destCity(paths)