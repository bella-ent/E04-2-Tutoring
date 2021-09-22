//? 1. a computer will be a competitor and it will have a random choice among rock, paper, scissors.
//? 2. And we will be a player and then give our choice as an argument of the class.
//? 3. make a method called compare for comparing the player’s choice with the computer’s choice.

class rockPaperScissors {
	constructor(playerSelect) {
		this.selectArray = ["rock", "paper", "scissor"];
		this.playerSelect = this.selectArray[playerSelect];
		this.computerChoice = this.selectArray[this.computerChoice()];
	}
	computerChoice() {
		return Math.floor(Math.random() * this.selectArray.length);
	}
	compare() {
		//! 1. the case of a drawn game.
		if (this.playerSelect === this.computerChoice) {
			console.log(
				`Player: ${this.playerSelect} / computer: ${this.computerChoice}`
			);
			console.log(`Draw! Try again!`);
		}
		//! 2. the case that the player wins.
		else if (
			(this.playerSelect === "rock" && this.computerChoice === "scissor") ||
			(this.playerSelect === "scissor" && this.computerChoice === "paper") ||
			(this.playerSelect === "paper" && this.computerChoice === "rock")
		) {
			console.log(
				`Player: ${this.playerSelect} / computer: ${this.computerChoice}`
			);
			console.log(`You win!`);
		}

		//! 3. the case that the player loses.
		else {
			console.log(
				`Player: ${this.playerSelect} / computer: ${this.computerChoice}`
			);
			console.log("You lose!");
		}
	}
}
const prompt = require("prompt-sync")({ sigint: true });

//!First step : give a condition to prevent unexpected user input.
// {
// 	const playerSelect = prompt("Choose: [0. rock / 1.paper / 2.scissor]: ");
// 	if (playerSelect > 2 || playerSelect < 0 || isNaN(playerSelect)) {
// 		console.log(`Please choose among 0, 1, 2`);
// 	} else {
// 		const play = new rockPaperScissors(playerSelect);
// 		play.compare();
// 	}
// }

//!Second step: make to continue the game using recursion.
// {
// 	function continueGame() {
// 		const playerSelect = prompt("Choose: [0. rock / 1.paper / 2.scissor]: ");
// 		if (playerSelect > 2 || playerSelect < 0 || isNaN(playerSelect)) {
// 			console.log(`Please choose among 0, 1, 2`);
// 			const playerAgain = prompt("Do you want to play again: yes or no?");
// 			if (playerAgain === "yes") continueGame();
// 		} else {
// 			const play = new rockPaperScissors(playerSelect);
// 			play.compare();
// 			if (play.playerSelect === play.computerChoice) {
// 				const playerAgain = prompt("Do you want to play again: yes or no?");
// 				if (playerAgain === "yes") continueGame();
// 			}
// 		}
// 	}
// }
// continueGame();

//! Challenge! : Using while loop to continue the game (Homework!;-))
