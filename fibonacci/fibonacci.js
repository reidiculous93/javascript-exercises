const fibonacci = function(x) {
    result = 0;
    if(x < 0){
        return 'OOPS';
    } 
    
    result = ((1.618034)**x - (1-1.618034)**x)/Math.sqrt(5);
    result = parseInt(result);
    return result;
}

module.exports = fibonacci
