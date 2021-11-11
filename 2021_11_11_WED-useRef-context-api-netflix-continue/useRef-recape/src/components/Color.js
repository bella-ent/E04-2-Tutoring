import React, { useRef, useState } from "react";

function Color() {
	const [data, setData] = useState();
	const selectedDom = useRef();
	console.log(selectedDom);

	// function change(e) {
	// 	setData(e.target.value);
	// 	console.log(data);
	// }

	// function change2(e) {
	// 	console.log(selectedDom.current.value);
	// }
	// function submit(e) {
	//     e.target.value =""
	// 	// setData("");
	// }
	function click() {
		selectedDom.current.style.color = "blue";
	}
	return (
		<div>
			<h1 onClick={click} ref={selectedDom}>
				Hello!
			</h1>
			{/* <input
				ref={selectedDom}
				onChange={change2}
				type="text"
				placeholder="useRef"
			/>
			<button>submit</button>
			<input
				onChange={change}
				type="text"
				placeholder="useState"
				value={data}
				onClick={submit}
			/>
			<button>submit</button> */}
		</div>
	);
}

export default Color;
