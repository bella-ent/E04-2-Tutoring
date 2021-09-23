const button = document.querySelector("#show-btn");
const cityLists = document.querySelector("#city-list");
const listsElements = cityLists.querySelectorAll("a");

//! For Showing the list

button.addEventListener("click", function () {
	if (button.innerText === "Show destinations") {
		cityLists.classList.remove("d-none");
		button.innerText = "Hide destinations";
		div.innerText = "";
		div.classList.remove("d-none");
	} else {
		cityLists.classList.add("d-none");
		button.innerText = "Show destinations";
		div.classList.add("d-none");
	}
});

let div = document.createElement("div");
div.id = "selected-city";
div.classList.add("col-11", "m-auto", "mt-2");

// div.className = "col-11 m-auto";
// div.className = "m-auto";

//* I want to attach "div" to body.
cityLists.appendChild(div);

cityLists.addEventListener("click", function (event) {
	//* Removing "active"class from all lists
	listsElements.forEach((el) => el.classList.remove("active"));
	//* Giving "active"class to event.target
	event.target.classList.add("active");
	div.innerText = `You selected ${event.target.innerText}`;

	// div.insertBefore();
});
