import Color from "./components/Color";
import "./App.css";
import { useState, useRef } from "react";
import Interval from "./components/Interval";

function App() {
	const [state, setState] = useState(0);
	let variable = Math.floor(Math.random() * 10);
	const ref = useRef(Math.floor(Math.random() * 10));

	function change() {
		setState(state + 1);
		console.log(ref);
		console.log(variable);
	}
	return (
		<div className="App">
			<h1>state: {state}</h1>
			<h1>var: {variable}</h1>
			<h1>ref: {ref.current}</h1>
			<button onClick={change}>click</button>

			{/* <Color /> */}
			<Interval />
		</div>
	);
}

export default App;
