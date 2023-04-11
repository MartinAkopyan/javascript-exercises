const removeFromArray = function(arr, ...args) {
		for (let j = 0; j < args.length; j++) {
			if (arr.indexOf(args[j]) !== -1) {
				arr.splice(arr.indexOf(args[j]), 1)
			}
		}

		return arr;
};

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }

// console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3))

// Do not edit below this line
module.exports = removeFromArray;
