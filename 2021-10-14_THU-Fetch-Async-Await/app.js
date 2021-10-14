// function A() {
// 	setTimeout(() => {
// 		console.log("A");
// 	}, 1000);
// }

// function B() {
// 	setTimeout(() => {
// 		console.log("B");
// 	}, 2000);
// }

// function C() {
// 	console.log("C");
// }

// A();
// B();
// C();

//TODO: Convert to Promise
function A() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(console.log("A"));
		}, 3000);
	});
}
function B() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(console.log("B"));
		}, 1000);
	});
}
function C() {
	console.log("C");
}

// A().then(B).then(C);

//TODO: Using Async and Await for making order
async function timeOrder() {
	const AA = await A();
	const BB = await B();
	C();
}
// timeOrder();

//TODO: Basic concept of Promise
// const ID = "Felix";

// const check = new Promise((resolve, reject) => {
// 	if (ID === "bella") {
// 		resolve(`Hi! ${ID}`);
// 	} else {
// 		reject("You are not Bella!");
// 	}
// });

// check
// 	.then((message) => console.log(message))
// 	.catch((error) => console.log(error))
// 	.finally(console.log("Promise anyway"));

//TODO: Using fetch to get data and make cards on the browser.

// fetch("./user.json")
// 	.then((response) => response.json())
// 	.then((data) =>
// 		data.forEach((user) => {
// 			makeCard(user);
// 		})
// 	);

function makeCard(user) {
	const div = document.createElement("div");
	const img = document.createElement("img");
	const name = document.createElement("h1");
	const email = document.createElement("h3");
	const city = document.createElement("h3");
	div.style.border = "1px solid black";
	div.style.width = "300px";
	div.style.textAlign = "center";
	img.src = user.avatar;
	name.innerText = `${user.first_name} ${user.last_name}`;
	email.innerText = user.email;
	city.innerText = user.city;
	div.append(img, name, email, city);
	document.body.append(div);
}

//TODO: Convert it to async function and await
async function fetchData() {
	const response = await fetch("./user.json");
	const data = await response.json();
	await data.forEach((user) => {
		makeCard(user);
	});
}
// fetchData();

//TODO: Making login page
const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");

function login() {
	const promise = new Promise((resolve, reject) => {
		if (input.value === "bella") {
			resolve(`Hi! ${input.value}`);
		} else {
			reject("You should be bella.");
		}
	});
	promise.then(makeGreeting).catch((error) => console.log(error));
}

function makeGreeting() {
	const div = document.createElement("div");
	const greeting = document.createElement("h1");
	const img = document.createElement("img");
	div.style.border = "1px solid black";
	div.style.width = "100%";
	div.style.textAlign = "center";
	img.src =
		"https://media.istockphoto.com/photos/on-colourful-speech-bubbles-picture-id180819641?b=1&k=20&m=180819641&s=170667a&w=0&h=CX51cRVofQl95e_cu9Bfy5PLZQ1WdsqmJ-NCFzU96UI=";
	greeting.innerText = `Hi! Bella!`;
	div.append(greeting, img);
	document.body.append(div);
}

button.addEventListener("click", login);
