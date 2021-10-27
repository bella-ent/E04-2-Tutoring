import React, { useState } from "react";

function StateFunc() {
	//* using a normal variable with click event(it doesn't change h1 innertext. (not rerendered))
	// let state = "Hi";
	// function changeH1() {
	// 	state = "Bye!!!";
	// 	console.log(state);
	// }
	//* using a state with click event(it changes h1 inner text (rerendered) but, be careful of behavior of setState(asynchronous execution))
	// const [state, setState] = useState({
	// 	name: "Anass",
	// 	city: "duesseldorf",
	// 	hobby: "riding a horse",
	// });
	// function changeH1() {
	// 	setState({ ...state, name: "Felix" });
	// 	console.log(state);
	// }
	// return (
	// 	<div className="App">
	// 		<h1 onClick={changeH1}> {state.name} </h1>
	// 	</div>
	// );
}

export default StateFunc;
