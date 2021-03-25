function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	let arrSum = 0;
	for(let i = 0; i < arr.length; i++){
		arrSum += arr[i];
	}
	return arrSum;
}

function multiply (arr) {
	let arrProduct = 1;
	for(let i = 0; i < arr.length; i++){
		arrProduct = arrProduct * arr[i];
	}
	return arrProduct;
}

function power(x, y) {
	return x**y;
}

function factorial(x) {
	let result = x;
	if(x === 0){
		return 1;
	} else {
		while(x > 1){
			x--
			result *= x;
		}
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}