import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
	const [userName, setUserName] = useState("");
	const [lang, setLang] = useState("en");
	//* using onChange event + state
	// const getName = (e) => {
	// 	setUserName(e.target.value);
	// };
	//* using useRef + state + onSubmit event
	const userRefName = useRef();
	const getName = (e) => {
		e.preventDefault();
		setUserName(userRefName.current.value);
	};
	//* change languages
	// const changeLanguages = () => {
	// 	lang === "en" ? setLang("de") : setLang("en");
	// };
	const ChangeLanguages = (e) => {
		setLang(e.target.value);
	};

	useEffect(() => {
		console.log(lang);
	}, [lang]);

	return (
		<div className="App">
			<span>Language:</span>
			{/* <button onClick={changeLanguages}>
			 {lang === "en" ? "English" : "Deutsch"} 
			</button>  */}
			<select name="" id="" onChange={ChangeLanguages}>
				<option value="en">English</option>
				<option value="de">Deutsch</option>
				<option value="kr">Korean</option>
			</select>
			<h1> {lang === "en" ? "What's your name?" : "Wie heißen Sie?"} </h1>
			<form action="" onSubmit={getName}>
				{/* <input type="text" onChange={getName} value={userName} /> */}
				<input type="text" ref={userRefName} />
				<button>{lang === "en" ? "Confirm" : "Bestätigen"}</button>
			</form>
			<h1>{userName}</h1>
		</div>
	);
}

export default App;
