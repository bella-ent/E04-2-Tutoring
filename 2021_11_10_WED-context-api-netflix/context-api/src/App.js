import React, { useState } from "react";
import "./App.css";
import Child from "./components/Child";
import myContext from "./contexts/ColorContext";

function App() {
	const [color, setColor] = useState("blue");
	const [bgColor, setBgColor] = useState("black");
	function changeColor() {
		setColor(color === "red" ? "blue" : "red");
	}
	return (
		<div className="App">
			<h1 style={{ color: color }}> React Components </h1>
			<myContext.Provider value={{ color, bgColor }}>
				<Child />
			</myContext.Provider>
			<button onClick={changeColor}>change color</button>
		</div>
	);
}

export default App;
