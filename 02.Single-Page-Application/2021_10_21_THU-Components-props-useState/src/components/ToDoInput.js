import React, { useState } from "react";

function ToDoInput(props) {
	const [text, setText] = useState("");
	function getInputValue(e) {
		setText(e.target.value);
	}
	function addToDos(e) {
		e.preventDefault();
		console.log(props.toDos);
		props.setToDos([...props.toDos, text]);
		setText("");
	}
	console.log(props.toDos);
	return (
		<div>
			<form action="" onSubmit={addToDos}>
				<input type="text" onChange={getInputValue} value={text} />
				<button type="submit">ADD</button>
			</form>
		</div>
	);
}

export default ToDoInput;
