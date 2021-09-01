//? Defining Class
{
	class Person {
		constructor(name, age, city) {
			this.name = name;
			this.age = age;
			this.city = city;
		}
		say() {
			console.log(`Hi! I'm ${this.name}`);
		}
	}
	const clara = new Person("clara", 22, "Leipzig");
}

// console.log(clara);
//* Object initializer or object literals
const person2 = {
	name: "John",
	age: 23,
	city: "Berlin",
};

//* new Object and Object.create()
const person3 = new Object();
//* make a property using dot notation.
person3.name = "Bob";
//* make a property using bracket notation.
person3["age"] = 33;
// console.log(person3);
const person4 = Object.create({});
person4.name = "Mathew";
person4["age"] = 35;
// console.log(person4);

//?A constructor Function (Es5)
function Person5(name, age, city) {
	this.name = name;
	this.age = age;
	this.city = city;
	this.say = function () {
		console.log(`Hi! I'm ${this.name}`);
	};
}

const john = new Person5("john", 33, "Essen");
// console.log(john);

//?To make a instance method using class prototype in a constructor Function
//* Its result is the same as the class declaration above.
function Person6(name, age, city) {
	this.name = name;
	this.age = age;
	this.city = city;
	Person6.prototype.say = function () {
		console.log(`Hi! I'm ${this.name}`);
	};
}
//! prototype is a kind like DNA(gene), so when we create a instance object, The instance object inherit class or constructor function's DNA (prototype)

const bella = new Person6("bella", 36, "Essen");
console.log(bella);

//? How can we make an method which can work with all objects (including strings).
Object.prototype.sing = function () {
	console.log(`lalalalala`);
};
//!but One thing that you have to be careful is if you create the same name’s methods which are already in Object class, it would overwrite them. So, be careful about this.

const cat = {
	name: "Kitty",
	size: "small",
};
//console.log(cat);
//? Why we can call also the method, that we saved in Object class, with String?
//! Because if there is no method called 'sing' in the string's prototype, 'prototype chain' executes.
//! Following this 'prototype chain', it is keep finding the 'sing' method to parent, grandparent's prototypes.
//! The final stop of prototype chaining is [Object.prototype]
//* For this reason, when we call this method with string, it works because of this 'prototype chain'.
//* reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// cat.name.sing();
// console.log(cat.name);

const string = "A tree is there";

// bella.sing();

// console.log(typeof Object);

// console.log(typeof String);

//? static methods and instance methods
class Vehicle {
	constructor(vehicleName, speed) {
		this.vehicleName = vehicleName;
		this.speed = speed;
	}
	vehicleInfo() {
		return `The vehicle is a ${this.vehicleName} and can go up to ${this.speed}.`;
	}

	static info() {
		// return `This is static info()`;
		return `The vehicle is a ${this.vehicleName} and can go up to ${this.speed}.`;
	}
}

const car = new Vehicle("car", "80m/h");
// console.log(car.vehicleInfo());
// console.log(car.info());
console.log(Vehicle.info()); //? why dose it show us undefined in the result text?
//! because we didn't make an instance object, so we didn't give arguments for properties. just calling the static method, we can't not use properties in constructor.

// console.log(car);

//* The example of static method and class for static methods.
class Calculator {
	static addition(numOne, numTwo) {
		return numOne + numTwo;
	}
	static multiplication(numOne, numTwo) {
		return numOne * numTwo;
	}
}
//! In this case, we can just create a Class for the sake of grouping static methods which we often use for coding.
// console.log(Calculator.addition(3, 4));
class Person {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.city = city;
	}
	say() {
		return `Hi! I'm ${this.name}`;
	}
}

class Teacher extends Person {
	constructor(name, age, city, job, id) {
		super(name, age, city);
		this.job = job;
		this.id = id;
	}
	sayTeacher() {
		return `${super.say()}, and I'm a ${this.job}`;
	}
}

const adem = new Teacher("Adem", 39, "Kiel", "Teacher", 12345);

console.log(adem);
console.log(adem.sayTeacher());

//* Solution for the class inheritance (31.08.2021 TUE)
class Animal {
	constructor(name, species) {
		this.name = name;
		this.species = species;
	}
	say() {
		return `${this.name} is ${this.species}`;
	}
}

class Bunny extends Animal {
	constructor(name, species, sound) {
		super(name, species);
		this.sound = sound;
	}
	describe() {
		return `${super.say()}, and ${this.name} is so cute.`;
	}
}

const resultArray = [];

function pushBunny(array) {
	return resultArray.push(new Bunny(...array));
}

pushBunny(["Jack", "Holland Lop", "Pip!"]);
pushBunny(["Bob", "Rex Rabbit", "Pip!"]);
pushBunny(["Susan", "Mini Lop", "Pip!"]);
pushBunny(["Leona", "Dutch Rabbit", "Pip!"]);
pushBunny(["Max", "Netherland Dwarf Rabbit", "Pip!"]);

resultArray.forEach((el) => console.log(el.describe()));
