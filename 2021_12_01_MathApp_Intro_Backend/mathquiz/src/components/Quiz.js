import React, { useState, useContext, useEffect } from "react";
import User from "./User";
//TODO: npm i use-sound -> import it.
import useSound from "use-sound";
import coinSound from "../sound/coinsound.wav";
import getSound from "../sound/getsound.wav";
import { userContext } from "../contexts/userContext";

function Quiz(props) {
	const [play] = useSound(coinSound);
	const [bgPlay] = useSound(getSound);
	const { coin, setCoin } = useContext(userContext);
	// const [limit, setLimit] = useState(50);
	// console.log(limit);
	const [firstNumber, setFirstNumber] = useState(
		Math.floor(Math.random() * 50)
	);
	const [secondNumber, setSecondNumber] = useState(
		Math.floor(Math.random() * 50)
	);
	const [answer, setAnswer] = useState(0);
	const changeMode = (e) => {
		e.target.value === "EASY"
			? setFirstNumber(Math.floor(Math.random() * 50))
			: e.target.value === "NORMAL"
			? setFirstNumber(Math.floor(Math.random() * 200))
			: setFirstNumber(Math.floor(Math.random() * 1000));
		e.target.value === "EASY"
			? setSecondNumber(Math.floor(Math.random() * 50))
			: e.target.value === "NORMAL"
			? setSecondNumber(Math.floor(Math.random() * 200))
			: setSecondNumber(Math.floor(Math.random() * 1000));
	};
	const [comment, setComment] = useState(props.comments.starting);
	const CheckAnswer = () => {
		if (firstNumber + secondNumber === +answer) {
			setComment(props.comments.true);
			setCoin(coin + 1);
			play();
		} else {
			setComment(props.comments.false);
		}
	};

	useEffect(() => {
		bgPlay();
	}, []);
	return (
		<div>
			<h1>{props.title}</h1>
			<div>
				<span>{props.selectMode} </span>
				<button onClick={changeMode} value={props.selections[0]}>
					{props.selections[0]}
				</button>
				<button onClick={changeMode} value={props.selections[1]}>
					{props.selections[1]}
				</button>
				<button onClick={changeMode} value={props.selections[2]}>
					{props.selections[2]}
				</button>
			</div>
			<div>
				<input
					type="number"
					onChange={(e) => setFirstNumber(e.target.value)}
					value={firstNumber}
				/>{" "}
				+
				<input
					type="number"
					onChange={(e) => setSecondNumber(e.target.value)}
					value={secondNumber}
				/>
				=
				<input
					type="number"
					onChange={(e) => setAnswer(e.target.value)}
					value={answer}
				/>
				<button onClick={CheckAnswer}>{props.checkBtn}</button>
			</div>
			<div>
				<span>{comment}</span>
			</div>
			<User />
		</div>
	);
}

export default Quiz;
