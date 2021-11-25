import React from "react";
import User from "./User";

function Quiz() {
	return (
		<div>
			<h1>Math Quiz</h1>
			<div>
				<span>Choose a mode: </span>
				<button>EASY</button>
				<button>NORMAL</button>
				<button>HARD</button>
			</div>
			<div>
				<input type="number" /> +
				<input type="number" /> =
				<input type="number" />
				<button>Check</button>
			</div>
			<div>
				<span>Can you solve it?</span>
			</div>
			<User />
		</div>
	);
}

export default Quiz;
