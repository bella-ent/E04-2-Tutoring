import "./App.css";
import { useState, useRef, useEffect } from "react";
import Quiz from "./components/Quiz";
import { userContext } from "./contexts/userContext";
import { en, de, kr } from "./data/languageData";

function App() {
	const [userName, setUserName] = useState("");
	const [lang, setLang] = useState("en");
	const [showMain, setShowMain] = useState(true);
	const [coin, setCoin] = useState(0);

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

	const hidingMain = (e) => {
		setShowMain(false);
	};

	useEffect(() => {
		console.log(lang);
	}, [lang]);

	return (
		<div className="App">
			<div className="language">
				<span>Language:</span>
				<select name="" id="" onChange={ChangeLanguages}>
					<option value="en">English</option>
					<option value="de">Deutsch</option>
					<option value="kr">Korean</option>
				</select>
			</div>
			<div className={showMain ? "first-page" : "hide"}>
				<h1> {lang === "en" ? "What's your name?" : "Wie heißen Sie?"} </h1>
				<form action="" onSubmit={getName}>
					{/* <input type="text" onChange={getName} value={userName} /> */}
					<input className="user-input" type="text" ref={userRefName} />
					<button className="user-input" onClick={hidingMain}>
						{lang === "en" ? "Confirm" : "Bestätigen"}
					</button>
				</form>
			</div>
			{/* <h1>{userName}</h1> */}
			<userContext.Provider
				value={{
					userName,
					setUserName,
					coin,
					setCoin,
					showMain,
					setShowMain,
					userRefName,
				}}
			>
				{lang === "en" ? (
					<Quiz {...en} />
				) : lang === "de" ? (
					<Quiz {...de} />
				) : (
					<Quiz {...kr} />
				)}
			</userContext.Provider>
		</div>
	);
}

export default App;
