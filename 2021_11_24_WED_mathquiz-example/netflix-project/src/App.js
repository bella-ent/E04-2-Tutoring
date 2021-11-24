import "./Asset/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainEn from "./component/View/Main/MainEn";
import MainDe from "./component/View/Main/MainDe";
import Sections from "./component/View/Main/Sections";
import sectionsEn from "./data/sectionsEn"
import sectionsDe from "./data/sectionsDe"
import {useState} from "react"
import LanguageContext from "./context/LanguageContext"
import FAQ from "./component/View/Main/FAQ";
import Email from "./component/View/Main/Email";
import Footer from "./component/View/Main/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./component/View/Login/Login";

function App() {
	const [lang, setLang] = useState("en")

	return (
		<div className="App">
			<LanguageContext.Provider value={{ lang, setLang }}>
				{lang === "en" ? <MainEn /> : <MainDe />}
				{lang === "en"
					? sectionsEn.map((section, index) => (
							<Sections key={index} props={section} />
					  ))
					: sectionsDe.map((section, index) => (
							<Sections key={index} props={section} />
					  ))}
				<FAQ />
				<div className="bottom-email-con">
					<Email />
				</div>
				<Footer />
				<Router>
					<Switch>
						<Route exact path="/" >
						</Route>
						<Route path="/login">
							<Login />
						</Route> 

					</Switch>
				</Router>
			</LanguageContext.Provider>
		</div>
	);
}

export default App;
