const sumAll = function(x, y) {
    let sum;
    if(y < 0 || x < 0 || typeof y != 'number' || typeof x != 'number'){
        return 'ERROR'
    }
    else if( y > x){
    sum = y * (y + x)/arguments.length;
    } else if (x > y){
    sum = x * (x + y)/arguments.length;
    }
    return sum;
}

module.exports = sumAll