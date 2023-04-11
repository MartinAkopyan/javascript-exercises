const sumAll = function(min, max) {
	if (typeof min !== 'number' || typeof max !== 'number') {
		return 'ERROR';
	} else if (min < 0) {
		return 'ERROR';
	}

	const args = Array.from(arguments);
	args.sort( function(a,b) {
		return a - b;
	})

	let sum = 0;
	for (let i = args[0]; i <= args[1]; i++) {
		sum += i;
	}

	return sum;
};
console.log(sumAll(123, 1))
// Do not edit below this line
module.exports = sumAll;
