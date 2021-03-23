const repeatString = function(str, x) {
let result = ''
if(x >= 0){
    for(let i = 0; i < x; i++){
        result += str;
    }
} else {
    return result = "ERROR";
}
    return result;
}

module.exports = repeatString
