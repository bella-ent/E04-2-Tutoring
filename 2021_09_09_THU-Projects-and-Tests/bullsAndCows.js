class BullsAndCows {
	constructor(secretNum) {
		if (secretNum.length === 4) {
			this.secretNumber = secretNum;
		} else {
			console.log(`Please type 4 digits.`);
		}
	}
	compare(guessNum) {
		let bulls = 0;
		let cows = 0;
		let secretArray = this.secretNumber.toString().split("");
		let guessArray = guessNum.toString().split("");
		secretArray.forEach((num1, index1) => {
			guessArray.forEach((num2, index2) => {
				if (num1 === num2) {
					if (index1 === index2) {
						bulls++;
					} else {
						cows++;
					}
				}
			});
		});
		console.log(`Hint: ${bulls} bull(s) ${cows} cow(s)`);
	}
}
const prompt = require("prompt-sync")({ sigint: true });
let secretNumber = prompt("[For Player1]: What is your secret number?: ");
const player1SecretNum = new BullsAndCows(secretNumber);
let player2TryNum = prompt(
	"\n\n\n\n\n\n\n\n\n\n\n[For Player2] Guess! input the number:  "
);
player1SecretNum.compare(player2TryNum);
