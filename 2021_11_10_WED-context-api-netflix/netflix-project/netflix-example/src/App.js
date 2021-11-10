import "./Assets/App.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { myContext } from "./contexts/LanguageContext";
import Nav from "./components/Nav";
import MainDe from "./components/MainDe";
import MainEn from "./components/MainEn";

function App() {
	const [lang, setLang] = useState("en");
	return (
		<div className="App">
			<myContext.Provider value={{ lang, setLang }}>
				<Nav />
				{lang === "en" ? <MainEn /> : <MainDe />}
			</myContext.Provider>
		</div>
	);
}

export default App;
