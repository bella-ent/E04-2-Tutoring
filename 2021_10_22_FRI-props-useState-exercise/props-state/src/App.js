import "./App.css";
import Test from "./components/Test";
import { useState } from "react";

function App() {
	const [test, setTest] = useState("hi");

	// let greeting = "Hi!";
	// let fruit = "orange";
	// const person = {
	// 	name: "Anass",
	// 	age: 20,
	// 	city: "Duesseldorf",
	// };
	// //* Destructuring
	// const { name, age, city } = person;
	// console.log(name);
	// const animals = ["bear", "tiger", "lion", "giraffe", "dog"];

	return (
		<div className="App">
			<h1>{test}</h1>
			<Test test={test} setTest={setTest} />
		</div>
	);
}

export default App;
