//! The more elegant way to use callback functions
function A(funcOne, funcTwo) {
	setTimeout(() => {
		console.log("A");
		funcOne(funcTwo);
	}, 1000);
}

function B(funcOne) {
	setTimeout(() => {
		console.log("B");
		funcOne();
	}, 2000);
}

function C() {
	console.log("C");
}

A(B, C);

//* The basic way to use callback functions
function A(callback1) {
	setTimeout(() => {
		console.log("A");
		callback1();
	}, 1000);
}

function B(callback2) {
	setTimeout(() => {
		console.log("B");
		callback2();
	}, 2000);
}

function C() {
	console.log("C");
}

A(() => B(C));

//* example of new operator
const date = new Date();

class Newclass {
	call() {}
}

const something = new Newclass();

console.log(typeof date);
console.log(something);

//TODO: Promise
const ID = "anass";
const promise = new Promise((resolve, reject) => {
	if (ID === "bella") {
		resolve("user login");
	} else {
		reject("invalid user");
	}
});
console.log(promise);
promise
	.then((message) => {
		console.log(message);
		console.log("You are logged in");
	})
	.catch(console.log("you are not bella!!!"));
