// * A PIN is a **P**ersonal **I**dentification **N**umber (as you are used with bank cards and unlocking your mobile phone)
// * Create the function `validPin`
//     * **Note:** by convention new words in function names (also acronyms) begin with uppercase letters, but continue with lowercase. Write the function as given.
// * Look at the unit tests (see file `testing/test.js` search the comment `/* PIN check */` ) for validating a pin.
// * The function should fulfill the requirements of the unit tests.
//     **Requirements**:
//     * The pin code must consist of only numerical digits.
//     * The pin code must be 4 digits long.
//     * The pin should have at least **two** different digits.
//     * The pin code's last digit should be even (0, 2, 4, 6, 8).
//     * The sum of the pin codes digits should add up to at least 5.
// * The function should print `true` if the pin meets all the requirements and `false` if it does not.
// * Call your function with some examples, and print the return values to the console.
//     **Examples**

function validPin(pin) {
	//? The pin code must consist of only numerical digits.
	if (typeof +pin !== "number") {
		return false;
	}
	//? The pin code must be 4 digits long.
	else if (pin.length !== 4) {
		return false;
	}
	//? The pin should have at least **two** different digits.
	else if (
		!(
			pin.split("").reduce((acc, cur) => {
				if (!acc.includes(cur)) {
					acc.push(cur);
				}
				return acc;
			}, []).length >= 2
		)
	) {
		return false;
	}
	//? The pin code's last digit should be even (0, 2, 4, 6, 8).
	else if (pin.split("")[pin.length - 1] % 2 !== 0) {
		return false;
	}
	//? The sum of the pin codes digits should add up to at least 5.
	else if (!(pin.split("").reduce((a, b) => +a + +b) >= 5)) {
		return false;
	} else {
		return true;
	}
}
console.log(validPin("1234"));
console.log(validPin("1235"));
console.log(validPin("wwww"));
console.log(validPin("12345"));
console.log(validPin("2222"));
console.log(validPin("1000"));
console.log(validPin("2224"));
//   > console.log(validPin("1234"));
//   true
//   > console.log(validPin("1235"));// last number should be even
//   false
//   > console.log(validPin("wwww"));// should only consist of numbers
//   false
//   > console.log(validPin("12345"));// should be 4 digits, not 5
//   false
//   > console.log(validPin("2222"));// not at least 2 different digits
//   false
//   > console.log(validPin("1000"));// sum of digits is less 5
//   false
//   > console.log(validPin("2224"));
//   true
