//?Q> 1
//*1. Create “Name” class and in the field(constructor) and give one property called “name” (don’t forget assign the parameter to it!)
//*2. Using getter and setter, check if ‘name’ property value is more than two letters. If it is not, show them the text `Please enter more than 2 letters`. If it is, accept its value and give it through getter to name property.

class Name {
	constructor(name) {
		this.name = name;
	}
	//! In the case of get and set, the function name becomes the property name. Writing the name, we can point to the property.
	get name() {
		return this._name;
	}

	//! What is "value" ? Value of "name" property!
	set name(value) {
		if (value.length <= 2) {
			console.log(`Please write more than 2 letters`);
		} else {
			this._name = value;
		}
	}
}

const person1 = new Name("josh");
console.log(person1);
console.log(person1._name);

//? Q> 2
//*1. Create “Person” class and in the field(constructor) and give two properties called “name” and “age”.
//*2. Using getter and setter, check if ‘age’ property value is more than 0 less than 150.
//* If it is not, show them the text `Please enter the number between 0 and 150 for age.`.
//* If it is, accept its value and give it through getter to age property.

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	get age() {
		return this._age;
	}
	set age(value) {
		if (value > 0 && value < 150) {
			this._age = value;
		} else {
			console.log(`Please enter the number between 0 and 150 for age.`);
			// this._age = value;
		}
		// value > 0 && value < 150;
		// // 	? (this._age = value)
		// 	: console.log(`Please enter the number between 0 and 150 for age.`);
	}
}

const person2 = new Person("Joshua", 160);
console.log(person2);

//? Q> 3
//* 1. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
//* 2. Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.

class TV {
	constructor(brand, channel = 1, volume = 50) {
		this.brand = brand;
		this.channel = channel;
		this.volume = volume;
	}

	increaseVolume() {
		return this.volume++;
	}
	decreaseVolume() {
		return this.volume--;
	}

	get volume() {
		return this._volume;
	}
	set volume(value) {
		if (value > 0 && value <= 100) {
			this._volume = value;
		} else {
			console.log(`Volume is upset!!!!!!`);
			// this._volume = value;
		}
	}
}

const samsung = new TV("samsung", 1, 99);
console.log(samsung);
samsung.increaseVolume();
samsung.increaseVolume();
console.log(samsung);

//? Q> 4
//* 1. Create “User” class and in the field(constructor) and give three properties called “name”. “id” and ‘pwd’.
//* 2. Using getter and setter, check if ‘pwd’ property value is more than 5 letters. If it is not, show them the text `Please type more than 5 letters`. If it is, in the getter convert those letters to * (one letter should be one *) and then give the value to pwd property.

//! If I find information about the connection of those private and public properties, I will send you on slack!

//* Claude's solution
class User {
	#pwd;
	constructor(name, id, pwd) {
		this.name = name;
		this.id = id;
		this.#pwd = pwd;
	}
	get pwd() {
		return "*".repeat(this.#pwd.length);
	}
	set pwd(value) {
		if (value.length < 6) {
			console.log(`Please type more than 5 letters`);
		} else {
			this.#pwd = value;
		}
	}
}

const user3 = new User("anass", 12345, "secret");
console.log(user3);
console.log(user3.pwd);
// console.log(user3.#pwd);

//* Another solution for the exercise.
{
	class User {
		#password;
		constructor(name, id, pwd) {
			this.name = name;
			this.id = id;
			this.pwd = pwd;
		}
		get pwd() {
			return "*".repeat(this.#password.length);
		}
		set pwd(value) {
			if (value.length < 6) {
				console.log(`Please type more than 5 letters`);
			} else {
				this.#password = value;
			}
		}
	}
}

//? Making new property using getter
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
const bella = new Person("Bella", "Yang");
console.log(bella.fullName);
