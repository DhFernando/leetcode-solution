var reformatNumber = function(number) {
    number = number.replace(/[_-]/g, ' ')
    number = number.replace(/\s/g, '')
    
    let arr = number.split('')

    let count3 = 3, count2 = 2, ret = ""
    while(arr.length > 0) {
        if(arr.length === 4) {
            count2=2
            while(count2 >0) {
                ret += arr.shift()
                count2--
            }
            ret += '-'
        } else if(arr.length === 2) {
            count2 = arr.length
            while(count2> 0) {
                ret += arr.shift()
                count2--
            }
            return ret
        } else if(arr.length === 3) {
            count3 = arr.length
            while(count3 > 0) {
                ret += arr.shift()
                count3--
            }
            return ret
        } else if(arr.length > 3){
            count3 = 3
            while(count3 > 0) {
                ret += arr.shift()
                count3--
            }
            ret += '-'
        }
    }
};