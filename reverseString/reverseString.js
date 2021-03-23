const reverseString = function(str) {
    let result = '';
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    result = reverseStr.join("");
    return result;
}

module.exports = reverseString
