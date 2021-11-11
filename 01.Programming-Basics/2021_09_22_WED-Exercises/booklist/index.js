const books = [
	{
		title: "The Design of EveryDay Things",
		author: "Don Norman",
		alreadyRead: false,
		img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
	},

	{
		title: "The Most Human Human",
		author: "Brian Christian",
		alreadyRead: true,
		img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
	},
	{
		title: "Thinking with Type",
		author: "Ellen Lupton",
		alreadyRead: true,
		img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
	},
	{
		title: "Eloquent JavaScript",
		author: "Marijn Haverbeke",
		alreadyRead: false,
		img: "https://eloquentjavascript.net/img/cover.jpg",
	},
];

const cardUL = document.querySelector(".book-list");

//? Dividing full name to two elements (first name,  last name)
books.forEach((el) => (el.author = el.author.split(" ")));
//? Sorting elements depends on last name.
books.sort((firstElement, secondElement) => {
	return firstElement.author[1].localeCompare(secondElement.author[1]);
});
books.forEach((el) => (el.author = el.author.reverse().join(", ")));

console.log(books);

//? Sort method
const number = ["claude", "felix", "bella", "annas"];

number.sort((a, b) => b.localeCompare(a));
console.log(number);

//? for treating numbers
//! plus number make [secondNum, firstNum].
//! zero doesn't make any change.
//! minus number make [firstNum, secondNum].

//? for treating strings
//* const number = ["claude", "felix", "bella", "annas"];
//* number.sort((a, b) => a.localeCompare(b));
