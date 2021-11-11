// Your JS here!
//?--- Grabbing HTML elements ---//
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const birthday = document.querySelector("#birthday");
const photo = document.querySelector("#photo");
const bgColor = document.querySelector("#primaryColor");
const fontColor = document.querySelector("#secondaryColor");
const comment = document.querySelector("#comment");
const skills = document.getElementsByClassName("skills");
const btnCV = document.querySelector("#btnCV");
const btnReset = document.querySelector("#resetForm");

//?--- A function for creating CV ---//
function createCV() {
	const cvContainer = document.createElement("div");
	const deleteX = document.createElement("div");
	const cvMain = document.createElement("div");
	const checkedSkills = [...skills]
		.map((list) => {
			if (list.checked === true) {
				return list.parentElement.innerText;
			}
		})
		.filter((el) => el);
	deleteX.innerText = "X";
	deleteX.id = "right";
	cvContainer.style.backgroundColor = bgColor.value;
	cvContainer.style.color = fontColor.value;
	cvContainer.id = "cv-con";
	cvMain.classList.add("cv-main");
	cvMain.innerHTML = `
    <h1>${nameInput.value}</h1>
    <h4>${nameInput.value} is ${
		new Date().getFullYear() - new Date(birthday.value).getFullYear()
	} years old</h4>
    <img src="${photo.value.slice(12)}"/>
    <h5>${comment.value}</h5>
    <h4>The programming skills of ${nameInput.value} are: ${checkedSkills.join(
		", "
	)} </h4>
    `;
	cvContainer.appendChild(deleteX);
	cvContainer.appendChild(cvMain);
	document.body.appendChild(cvContainer);
	deleteX.addEventListener("click", removeCV);
}

//?--- A function for calculating age ---//
function age() {
	const todayArray = [
		new Date().getFullYear(),
		new Date().getMonth() + 1,
		new Date().getDate(),
	];
	const birthdayArray = birthday.value.split("-");

	if (
		// if there is month left before my birthday.
		birthdayArray[1] - todayArray[1] > 0 ||
		// if there is no month left but there is days left before my birthday.
		(birthdayArray[1] - todayArray[1] === 0 &&
			birthdayArray[2] - todayArray[2] > 0)
	) {
		return todayArray[0] - birthdayArray[0] - 1;
	} else {
		return todayArray[0] - birthdayArray[0];
	}
}

//?--- A function for resetting Form ---//
function resetForm() {
	form.reset();
	//*	<button id="resetForm" type="reset">Reset Form</button> : another way to reset form
}

//?--- A function for removing CV ---//
function removeCV(event) {
	event.target.parentElement.remove();
}

//?--- Event Handlers ---//
btnCV.addEventListener("click", createCV);
btnReset.addEventListener("click", resetForm);
