// / CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
	//*solution1
	return str.split("").reverse().join("");
}
//* solution2
// 	return str
// 		.split("")
// 		.sort((a, b) => {
// 			return str.indexOf(b) - str.indexOf(a);
// 		})
// 		.join("");
// }
// console.log(reverseString("hello"));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
	return str === str.split("").reverse().join("");
}
// console.log(isPalindrome("racecar"));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
	// return parseInt(int.toString().split("").reverse().join(""));
	//*Using the unary plus (unary operator)
	return +int.toString().split("").reverse().join("");
}
// console.log(reverseInt(521) === 125);

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
	//* solution 1 (Using a slice method)
	// return str
	// 	.split(" ")
	// 	.map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
	// 	.join(" ");
	//* solution 2 (Using a replace method)
	return str
		.split(" ")
		.map((el) => el.replace(el[0], el[0].toUpperCase()))
		.join(" ");
}
// console.log(capitalizeLetters("i love javascript") === "I Love Javascript");

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

//* solution 1
// function maxCharacter(str) {
// 	const result = {};
// 	let max = 0;
// 	let character = "";
// 	for (let key of str) {
// 		if (result[key]) {
// 			result[key]++;
// 		} else {
// 			result[key] = 1;
// 		}
// 	}
// 	console.log(result);
// 	for (let key in result) {
// 		if (result[key] > max) {
// 			max = result[key];
// 			character = key;
// 		}
// 	}

// 	return character;
// }

//* solution 2 with reduce and object.entries, find, includes methods.
function maxCharacter(str) {
	const result = str.split("").reduce((acc, cur) => {
		if (!acc[cur]) {
			acc[cur] = 1;
		} else {
			acc[cur]++;
		}
		return acc;
	}, {});
	return Object.entries(result).find((el) => {
		return el.includes(Math.max(...Object.values(result)));
	})[0];
}

// console.log(maxCharacter("javascript") == "a");

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

//*solution with the arguments object
// function addAll() {
// 	let array = Array.from(arguments);
// 	return array.reduce((acc, cur) => {
// 		return acc + cur;
// 	});
// }

//*solution with the rest parameter
function addAll(...args) {
	return [...args].reduce((acc, cur) => {
		return acc + cur;
	});
}

//* solution 3 with arguments object and for loop
// function addAll() {
// 	let sum = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }

// console.log(addAll(2, 5, 6, 7));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

// function sumAllPrimes(num) {
// 	const resultArray = [];
// 	for (let i = 2; i <= num; i++) {
// 		if (num % i === 0) {
// 			resultArray.push(i);
// 		}
// 	}
// 	console.log(resultArray);
// 	return addAll(...resultArray);
// }

// console.log(sumAllPrimes(10));

//! We will check it tomorrow!
function isPrime(x) {
	if (x == 2) {
		return true;
	}
	for (let i = 2; i < x; i++) {
		if (x % i == 0) {
			return false;
		}
	}
	return true;
}
console.log(`>>>>>>>>>>>>>>>>`);
console.log(isPrime(10));

function sumAllPrimes(num) {
	let sum = 0;
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			console.log(i);
			sum = sum + i;
		}
	}
	return sum;
}
console.log(sumAllPrimes(10));
