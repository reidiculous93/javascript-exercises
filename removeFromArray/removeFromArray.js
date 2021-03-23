const removeFromArray = function(arr, ...theArgs) {
        for(let i = 0; i < theArgs.length; i++){
            if(arr.includes(theArgs[i])){
            ind = arr.indexOf(theArgs[i]);
            arr.splice(ind, 1);
            };
        };
    return arr;
}

module.exports = removeFromArray
