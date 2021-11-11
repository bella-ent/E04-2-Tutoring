const prompt = require("prompt-sync")();
class calculate {
	//? A getter make a property in the class and static property is bounded to class itself.
	static get pi() {
		return Math.PI;
	}
	static get e() {
		return Math.exp(1);
	}
	//? we can also pull the static methods into another methods of the class.
	// static aaaaa() {
	// 	return this.pi;
	// }
	static ratio(x, y, width) {
		console.log(`height is ${(y * width) / x}`);
	}

	static percentage(x, y) {
		return `${((x / y) * 100).toFixed(2)}%`;
	}

	static add(x, y) {
		return x + y;
	}

	static subtract(x, y) {
		return x - y;
	}
	static multiply(x, y) {
		return x * y;
	}
	static divide(x, y) {
		return x / y;
	}
	static modulation(x, y) {
		return x % y;
	}

	static elevate(x, y) {
		// return Math.pow(x, y);
		//? Using recursion to calculate power.
		if (y === 1) {
			return x;
		} else {
			return x * this.elevate(x, y - 1);
		}
		// x * this,elevate(2,2)
		// x * x * this.elevate(2,1)
		// x * x * x
		//? Using exponentiation to calculate power.
		// return x ** y;
	}
	static sqrt(x) {
		return Math.sqrt(x);
	}
}

console.log(calculate.pi);
console.log(calculate.e);
calculate.elevate(2, 3);
const x = prompt("enter your x: ");
const y = prompt("enter your y: ");
console.log(calculate.percentage(x, y));
console.log(calculate.subtract(x, y));
console.log(calculate.multiply(x, y));
// const x = prompt("enter your x: ");
// const y = prompt("enter your y: ");
// const width = prompt("enter your width: ");
// calculate.ratio(x, y, width);
