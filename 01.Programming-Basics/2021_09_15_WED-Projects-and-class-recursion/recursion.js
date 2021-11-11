const prompt = require("prompt-sync")({ sigint: true });

//! using while loop
{
	let x = Number(prompt("Enter 1st Number: "));
	while (isNaN(x)) {
		x = Number(prompt("This is not a number. Please insert a vaild number: "));
	}
}

//! using recursion
{
	let x = Number(prompt("Enter 1st Number: "));
	function repeat() {
		console.log(typeof x);
		if (isNaN(x) || x === 0) {
			x = Number(
				prompt("This is not a number. Please insert a vaild number: ")
			);
			repeat();
		} else {
			console.log(x);
		}
	}
	repeat();
}

//* why recursion is stopped if we just push enter in the prompt.
console.log(Number(null));

//! Using Recursion
function abc(number) {
	console.log(number);
	if (number >= 3) {
		return;
	} else {
		number++;
		abc(number);
	}
}

abc(1);

//! Using while loop
let num = 0;
while (num <= 3) {
	console.log(num++);
}
