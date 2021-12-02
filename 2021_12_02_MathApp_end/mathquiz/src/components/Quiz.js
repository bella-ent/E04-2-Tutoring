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
	const { coin, setCoin, setBackground } = useContext(userContext);
	// const [limit, setLimit] = useState(50);
	// console.log(limit);
	const [firstNumber, setFirstNumber] = useState(
		Math.floor(Math.random() * 50)
	);
	const [secondNumber, setSecondNumber] = useState(
		Math.floor(Math.random() * 50)
	);
	const [answer, setAnswer] = useState("");
	const [mode, setMode] = useState("EASY");
	const changeMode = (e) => {
		if (e.target.value === "EASY") {
			setFirstNumber(Math.floor(Math.random() * 50));
			setSecondNumber(Math.floor(Math.random() * 50));
			setMode(e.target.value);
		} else if (e.target.value === "NORMAL") {
			setFirstNumber(Math.floor(Math.random() * 200));
			setSecondNumber(Math.floor(Math.random() * 200));
			setMode(e.target.value);
		} else {
			setFirstNumber(Math.floor(Math.random() * 1000));
			setSecondNumber(Math.floor(Math.random() * 1000));
			setMode(e.target.value);
		}
		// e.target.value === "EASY"
		// 		? setFirstNumber(Math.floor(Math.random() * 50))
		// 		: e.target.value === "NORMAL"
		// 		? setFirstNumber(Math.floor(Math.random() * 200))
		// 		: setFirstNumber(Math.floor(Math.random() * 1000));
		// e.target.value === "EASY"
		// 	? setSecondNumber(Math.floor(Math.random() * 50))
		// 	: e.target.value === "NORMAL"
		// 	? setSecondNumber(Math.floor(Math.random() * 200))
		// 	: setSecondNumber(Math.floor(Math.random() * 1000));
	};
	const [comment, setComment] = useState(props.comments.starting);
	const CheckAnswer = () => {
		if (firstNumber + secondNumber === +answer) {
			setComment(props.comments.true);
			setCoin(coin + 50);
			play();
			setBackground("correctBGI");
			setTimeout(() => {
				setBackground("App");
				if (mode === "EASY") {
					setFirstNumber(Math.floor(Math.random() * 50));
					setSecondNumber(Math.floor(Math.random() * 50));
				} else if (mode === "NORMAL") {
					setFirstNumber(Math.floor(Math.random() * 200));
					setSecondNumber(Math.floor(Math.random() * 200));
				} else {
					setFirstNumber(Math.floor(Math.random() * 1000));
					setSecondNumber(Math.floor(Math.random() * 1000));
				}
				setAnswer("");
				setComment(props.comments.starting);
			}, 3000);
		} else {
			setComment(props.comments.false);
		}
	};

	useEffect(() => {
		// bgPlay();
	}, []);
	return (
		<div className="main-con">
			<h1>{props.title}</h1>
			<div className="modes">
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
			<div className="question-con">
				<form className="question" onSubmit={(e) => e.preventDefault()}>
					<input
						type="number"
						onChange={(e) => setFirstNumber(e.target.value)}
						value={firstNumber}
						readOnly
					/>{" "}
					+
					<input
						type="number"
						onChange={(e) => setSecondNumber(e.target.value)}
						value={secondNumber}
						readOnly
					/>
					=
					<input
						type="number"
						onChange={(e) => setAnswer(e.target.value)}
						value={answer}
					/>
					<button onClick={CheckAnswer}>{props.checkBtn}</button>
				</form>
				<div className="comments">
					<span>{comment}</span>
				</div>
			</div>
			<User />
		</div>
	);
}

export default Quiz;
