import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import LanguageContext from "../../../context/LanguageContext";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavBar() {
	const { lang, setLang } = useContext(LanguageContext);
	function setLanguage(e) {
		setLang(e.target.value);
	}
	return (
		<div className="nav-con">
			<div id="net-logo">NOTFLIX</div>
			<div>
				<select name="" id="languages" onChange={setLanguage}>
					<option value="en">English</option>
					<option value="de">Deutsch</option>
				</select>
				<Router>
					<Link to="/login">
						<Button variant="danger">
							{lang === "en" ? "Sign In" : "Einloggen"}
						</Button>
					</Link>
				</Router>
			</div>
		</div>
	);
}

export default NavBar;
