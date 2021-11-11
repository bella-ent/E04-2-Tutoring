import React, { useState, useEffect, useRef } from "react";

function Interval() {
	const [count, setCount] = useState(0);
	// const [intervalID, setIntervalID] = useState(0);
	// const intervalIDRef = useRef(0);
	let intervalId = 0;

	function secondTicker() {
		intervalId = setInterval(() => setCount((count) => count + 1), 1000);
		// intervalId = setInterval(() => setCount((count) => count + 1), 1000);
		console.log("Counting start....");
		console.log(intervalId);
	}

	function stopTicker() {
		console.log(intervalId);
		clearInterval(intervalId);
		console.log(intervalId);
	}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={secondTicker}>start</button>
			<button onClick={stopTicker}>stop</button>
		</div>
	);
}

export default Interval;
