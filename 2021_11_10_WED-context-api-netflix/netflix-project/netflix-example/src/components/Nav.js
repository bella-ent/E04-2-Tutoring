import React, { useContext } from "react";
import { myContext } from "../contexts/LanguageContext";

function Nav() {
	const { lang, setLang } = useContext(myContext);
	function changeLanguage(e) {
		setLang(e.target.value);
	}
	return (
		<div className="nav-con">
			<h1>NOTFLIX</h1>
			<div>
				<select name="" id="language">
					<option onClick={changeLanguage} value="en">
						English
					</option>
					<option onClick={changeLanguage} value="de">
						Deutch
					</option>
				</select>
				<button>{lang === "en" ? "Sign In" : "Einloggen"}</button>
			</div>
		</div>
	);
}

export default Nav;
