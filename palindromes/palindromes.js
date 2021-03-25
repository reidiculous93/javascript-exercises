const palindromes = function(str) {
    str = str.replace(/[^\w]/g, "");
    let result = '';
    let splitStr = str.split('');
    let reverseStr = splitStr.reverse();
    result = reverseStr.join('');

    return str.toLowerCase() === result.toLowerCase() ? true : false;
}

module.exports = palindromes
