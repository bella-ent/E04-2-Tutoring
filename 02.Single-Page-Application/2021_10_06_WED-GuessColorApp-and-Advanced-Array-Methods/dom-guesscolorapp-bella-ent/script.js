const resetBtn = document.querySelector("#reset");
const squares = document.querySelectorAll(".square");
const rbgTitle = document.querySelector("#color-display");
const easyBtn = document.querySelector(".mode");

let lives = 3;
function randomNumber() {
	const randomNumber = Math.floor(Math.random() * 256);
	return randomNumber;
}
function resetColor() {
	// const randomRGB = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
	// console.log(randomRGB);
	squares.forEach((square) => {
		square.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
	});
	rbgTitle.innerText =
		squares[Math.floor(Math.random() * squares.length)].style[
			"background-color"
		];
	lives = 3;
}
resetColor();

function guessAndCheck(event) {
	const clickedDivRGB = event.target.style["background-color"];
	// console.log(clickedDivRGB, rbgTitle.innerText.toLowerCase());
	while (lives >= 0) {
		if (clickedDivRGB === rbgTitle.innerText.toLowerCase() && lives > 0) {
			alert("You're win!");
			resetColor();
			console.log(clickedDivRGB);
			break;
		} else if (
			clickedDivRGB !== rbgTitle.innerText.toLowerCase() &&
			lives > 0
		) {
			alert(`Wrong! You have ${--lives} left.`);
			console.log(clickedDivRGB);
			break;
		} else {
			alert("Game over!");
			resetColor();
			break;
		}
	}
}

// function guessAndCheckNoLimit(event) {
// 	const clickedDivRGB = event.target.style["background-color"];

// 	if (clickedDivRGB === rbgTitle.innerText.toLowerCase()) {
// 		alert("You're win!");
// 		resetColor();
// 		console.log(clickedDivRGB);
// 	} else if (clickedDivRGB !== rbgTitle.innerText.toLowerCase()) {
// 		alert(`Wrong! `);
// 		console.log(clickedDivRGB);
// 	}
// }

resetBtn.addEventListener("click", resetColor);
squares.forEach((square) => square.addEventListener("click", guessAndCheck));
