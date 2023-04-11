const leapYears = function(leapYear) {
	if (leapYear % 400 === 0) {
		return true;
	} else if (leapYear % 100 === 0) {
		return false;
	} else if (leapYear % 4 === 0) {
		return true
	} else {
		return false;
	}
};

console.log(leapYears(1600))
// Do not edit below this line
module.exports = leapYears;
