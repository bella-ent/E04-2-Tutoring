//Select the header that is the closest to the first h1 heading. Give the header a solid border of 5px.
let h1 = document.querySelector(".heading");
h1.parentElement.style.border = "5px solid";

//If the .info section contains an .info-package, select all package-titles and give the title's previous element a border.

const info = document.querySelector(".info");

[...info.children].forEach((el) => {
	//el = "info-package"
	el.children[1].previousElementSibling.style.border = "2px solid black";
	// [...el.children][1].previousElementSibling.style.border = "29px solid black";
	//Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border.

	//! lastElement return HTMLcollection (it contains just only HTML elements)
	const label = el.lastElementChild;
	// label.className === "mild"
	// 	? (label.style.border = "2px solid yellow")
	// 	: label.className === "intense"
	// 	? (label.style.border = "2px solid orange")
	// 	: (label.style.border = "2px solid red");

	//* Using matches method
	label.matches(".mild")
		? (label.style.border = "2px solid yellow")
		: label.matches(".intense")
		? (label.style.border = "2px solid orange")
		: (label.style.border = "2px solid red");
});

//
const array = ["claude", "felix", "annas", "bella"];
console.log(array);
console.log({ ...array });
