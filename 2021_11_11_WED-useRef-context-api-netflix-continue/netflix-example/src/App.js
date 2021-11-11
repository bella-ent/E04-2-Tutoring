import "./Assets/App.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { myContext } from "./contexts/LanguageContext";
import Nav from "./components/Nav";
import MainDe from "./components/MainDe";
import MainEn from "./components/MainEn";
import sectionsEn from "./data/sectionsEn";
import sectionsDe from "./data/sectionsDe";
import Sections from "./components/Sections";

function App() {
	const [lang, setLang] = useState("en");
	return (
		<div className="App">
			<myContext.Provider value={{ lang, setLang }}>
				<Nav />
				{lang === "en" ? <MainEn /> : <MainDe />}
				{lang === "en"
					? sectionsEn.map((section) => <Sections props={section} />)
					: sectionsDe.map((section) => <Sections props={section} />)}
			</myContext.Provider>
		</div>
	);
}

export default App;
