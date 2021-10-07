const array = [null, "bella", undefined, "lana", "tomas", "", "bob", 0];
// const filteredArray = array.filter((el) => typeof el === "string");
// console.log(filteredArray);
//TODO: How can I get items that contain actual values.
const filteredArray = array.filter((el) => el);
const oppositeArray = array.filter((el) => !el);
console.log(filteredArray);
console.log(oppositeArray);

//TODO: How can I get items that has more than six letters.
const fruits = ["banana", "pineapple", "apple", "orange", "tomato"];
const sixLetterFruit = fruits.filter((el) => el.length > 6);
console.log(sixLetterFruit);

const removePineapple = fruits.filter((el) => el.length <= 6);
console.log(removePineapple);

//TODO: How can I remove elements "apple" from the array?
const removeApple = fruits.filter((el) => el !== "apple");
console.log(removeApple);

const fruits2 = [
	"banana",
	"pineapple",
	"apple",
	"orange",
	"apple",
	"pineapple",
	"tomato",
];
//! indexOf method returns just first element's index number!
// console.log(fruits2.indexOf("pineapple"))

// console.log(fruits2.indexOf("apple"));
const duplicateFruit = fruits2.filter((el, index) => {
	return fruits2.indexOf(el) === index;
});
console.log(duplicateFruit);

//TODO: Do all elements have letter A?
const fruits1 = [
	"banana",
	"pineapple",
	"apple",
	"orange",
	"tomato",
	"pineapple",
	"apple",
];
const everyA = fruits1.every((el) => el.includes("a"));
console.log(everyA);

//TODO: Are there elements which has letter o?
const someO = fruits1.some((el) => el.includes("o"));
console.log(someO);

//TODO: Find out numbers of elements and make key and value pair(property) in object.
// [{"banana":1},{pineapple:2}......]
const elementsNumber = fruits1.reduce((acc, cur) => {
	if (!acc[cur]) {
		acc[cur] = 1;
	} else {
		acc[cur]++;
	}
	return acc;
}, {});
console.log(elementsNumber);

// const object = {
// 	name: "bella",
// };
// console.log(object.name);
// console.log(object["name"]);

userData = [
	{
		id: 7,
		email: "michael.lawson@reqres.in",
		first_name: "Michael",
		last_name: "Lawson",
		city: "Berlin",
		hobby: ["swimming", "soccer", "cycling"],
		avatar: "https://reqres.in/img/faces/7-image.jpg",
	},
	{
		id: 8,
		email: "lindsay.ferguson@reqres.in",
		first_name: "Lindsay",
		last_name: "Ferguson",
		city: "Essen",
		hobby: ["soccer", "singing", "baking"],
		avatar: "https://reqres.in/img/faces/8-image.jpg",
	},
	{
		id: 9,
		email: "tobias.funke@reqres.in",
		first_name: "Tobias",
		last_name: "Funke",
		city: "Hamburg",
		hobby: ["swimming", "singing", "baking"],
		avatar: "https://reqres.in/img/faces/9-image.jpg",
	},
	{
		id: 10,
		email: "byron.fields@reqres.in",
		first_name: "Byron",
		last_name: "Fields",
		city: "Berlin",
		hobby: ["swimming", "gardening", "baking"],
		avatar: "https://reqres.in/img/faces/10-image.jpg",
	},
	{
		id: 11,
		email: "george.edwards@reqres.in",
		first_name: "George",
		last_name: "Edwards",
		city: "Oberhausen",
		hobby: ["gardening", "soccer", "baking"],
		avatar: "https://reqres.in/img/faces/11-image.jpg",
	},
	{
		id: 12,
		email: "rachel.howell@reqres.in",
		first_name: "Rachel",
		last_name: "Howell",
		city: "Hamburg",
		hobby: ["soccer", "cycling", "singing"],
		avatar: "https://reqres.in/img/faces/12-image.jpg",
	},
];

//TODO: getting to whole user's full names
const fullNames = userData.map(
	(user) => `${user.first_name} ${user.last_name}`
);
console.log(fullNames);

//TODO: getting to a last users' first name
const lastUsersFullNames = userData[userData.length - 1];
console.log(lastUsersFullNames);

//TODO: getting full names whose hobby is swimming
const hobbySwimming = userData
	.filter((user) => user.hobby.includes("swimming"))
	.map((user) => `${user.first_name} ${user.last_name}`);
console.log(hobbySwimming);

const fruits4 = ["banana", "pineapple", "apple", "orange", "tomato"];

const forEachResult = fruits4.forEach((el) => {
	const h1 = document.createElement("h1");
	h1.innerText = el;
	document.body.appendChild(h1);
});
console.log(forEachResult);

//TODO: find out people whose first name has letter a and sort the array in alphabetical order. And then display the name and avatar with hobby and city as a card.

const cyclingHamburg = userData
	.filter((user) => user.first_name.includes("a"))
	.sort((a, b) => a.first_name.localeCompare(b.first_name))
	.forEach((el) => makeCard(el));

function makeCard(userData) {
	const cardContainer = document.createElement("div");
	const userName = document.createElement("h1");
	const avatar = document.createElement("img");
	const hobby = document.createElement("h3");
	const city = document.createElement("h3");
	cardContainer.style.border = "1px solid black";
	cardContainer.style.width = "300px";
	cardContainer.style.textAlign = "center";
	userName.innerText = userData.first_name;
	avatar.src = userData.avatar;
	hobby.innerText = userData.hobby.join(", ");
	city.innerText = userData.city;
	cardContainer.append(userName, avatar, hobby, city);
	document.body.appendChild(cardContainer);
}
