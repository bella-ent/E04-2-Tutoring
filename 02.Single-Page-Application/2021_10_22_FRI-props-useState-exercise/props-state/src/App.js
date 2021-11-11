import "./App.css";
import Test from "./components/Test";
import { useState } from "react";

function App() {
	const [greeting, setGreeting] = useState("hi");

	// let greeting = "Hi";
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
			<h1
				onClick={(e) => {
					setGreeting("Hallo");
				}}
			>
				{greeting}
			</h1>
			<Test greeting={greeting} />
			{/* <Test test={test} setTest={setTest} /> */}
			{/* <Test greeting={greeting} /> */}
		</div>
	);
}

export default App;
