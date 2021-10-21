import React, { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoView from "./components/ToDoView";

function App() {
	//* useState make an array and there are two elements. (state, setState)
	const [toDos, setToDos] = useState([]);
	const removeToDo = (index) => {
		setToDos(toDos.filter((item, idx) => index !== idx));
	};
	return (
		<div className="App">
			<h1>To Do list</h1>
			<ToDoInput toDos={toDos} setToDos={setToDos} />
			<ToDoView toDos={toDos} removeToDo={removeToDo} />
		</div>
	);
}

export default App;
