// An Array that we are going to use with loops
const people = [
	{
		name: "John",
		age: 31,
		city: "Berlin",
		hobby: ["soccer", "swimming", "cycling"],
	},
	{
		name: "Christina",
		age: 36,
		city: "Hannover",
		hobby: ["swimming", "gardening", "squash"],
	},
	{
		name: "Robin",
		age: 26,
		city: "Duisburg",
		hobby: ["sawing", "squash", "soccer"],
	},
	{
		name: "Anna",
		age: 21,
		city: "Berlin",
		hobby: ["Badminton", "cycling", "swimming"],
	},
	{
		name: "Leon",
		age: 41,
		city: "Berlin",
		hobby: ["soccer", "gardening", "cycling"],
	},
];

//? How can we get the value of a specific element's key
// console.log(people[0].name); //the value of a key property in the first element
// console.log(people[4].name); //the value of a key property in the last element
// console.log(people[people.length-1].name);  // Another way: How to get the value of a key property in the last element.
// array[array.length -1]: It is a common way to get the last element of an array in the case of unknowing the last element's index.

//! To get all name properties' values from all elements of array and put them into an new array.
//? For Loop

const forLoop = (array) => {
	let resultArray = [];
	for (let i = 0; i < array.length; i++) {
		resultArray.push(array[i].name);
	}
	return resultArray;
};
// console.log(forLoop(people));

//? while loop

const whileLoop = (array) => {
	let resultArray = [];
	let counter = 0;
	while (counter < array.length) {
		resultArray.push(array[counter].name);
		counter++;
	}
	return resultArray;
};
// console.log(whileLoop(people));

//? do-while loop

const doWhileLoop = (array) => {
	let resultArray = [];
	let counter = 0;
	do {
		resultArray.push(array[counter].name);
		counter = counter + 1;
		// counter+=1
		// counter++
	} while (counter <= array.length - 1);
	return resultArray;
};
// console.log(doWhileLoop(people));

//? for ... of (for arrays)

const forOf = (array) => {
	const resultArray = [];
	for (const element of array) {
		resultArray.push(element.name);
	}
	return resultArray;
};
// console.log(forOf(people));

//* Advanced array methods (All advanced array methods need a call-back function as an argument)
//? forEach method

const forEach = (array) => {
	const resultArray = [];
	array.forEach((el) => {
		return resultArray.push(el.name);
	});
	return resultArray;
};
console.log(forEach(people));

//? map method
const map = (array) => {
	return array.map((el) => {
		return el.name;
	});
};
console.log(map(people));

const map1 = people.map((el) => el.name);
console.log(map1);

//? filter method

const filter1 = people.filter((el) => el.name.length >= 5);
console.log(filter1);

//! To get only names in new array who lives in Berlin using the method chaining.

const getNamesInCity = people
	.filter((el) => el.city === "Berlin")
	.map((el) => el.name);
console.log(getNamesInCity);

//! To get names whose hobby are a gardening.
const getNamesIncludeGardening = people
	.filter((el) => el.hobby.includes("gardening"))
	.map((el) => el.name);
console.log(getNamesIncludeGardening);

//* Destructuring ver. for the previous one.
{
	const getNamesIncludeGardening = people
		.filter(({ hobby }) => hobby.includes("gardening"))
		.map(({ name }) => name);
	console.log(getNamesIncludeGardening);
}

//! To get only names in new array who lives in Berlin using the method chaining and sort the result in alphabet order.
const sortedGetNamesInCity = people
	.filter((el) => el.city === "Berlin")
	.map((el) => el.name)
	.sort();
console.log(sortedGetNamesInCity);

//* Another way to sort the result in alphabet order. (using localeCompare)
const numbers = ["Banana", "Apple", "Orange", "Pear"];
const sortedNumbers = numbers.sort((a, b) => a.localeCompare(b));
console.log(sortedNumbers);
