let _big;
let _medium
let _small;
var ParkingSystem = function(big, medium, small) {
    _big = big;    
    _medium = medium;
    _small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if((carType == 1 && _big === 0) || (carType == 2 && _medium === 0) || (carType == 3 && _small === 0) ){
        return false;
    }else if( carType == 1 ){
        _big--
    }else if( carType == 2 ){
        _medium--
    }else if( carType == 3 ){
        _small--
    } return true
};