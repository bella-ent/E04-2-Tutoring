import React, { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import menusEn from "../../../data/footerMenuEN";
import menusDe from "../../../data/footerMenuDe";
function Footer() {
	const { lang, setLang } = useContext(LanguageContext);
	function setLanguage(e) {
		setLang(e.target.value);
	}
	return (
		<div className="footer-con">
			{lang === "en" ? (
				<div className="call">Questions? Call 0800-000-7969</div>
			) : (
				<div className="call">Fragen? Einfach anrufen: 0800-000-9677</div>
			)}
			<div className="footer-ul">
				{lang === "en"
					? menusEn.map((menu) => <div className="footer-list">{menu}</div>)
					: menusDe.map((menu) => <div className="footer-list">{menu}</div>)}
			</div>
			<div className="footer-ul mt-3">
				<select name="" id="languages-foot" onChange={setLanguage}>
					<option value="en">English</option>
					<option value="de">Deutsch</option>
				</select>
			</div>
			<div className="footer-ul mt-4">
				{lang === "en" ? (
					<span id="netflix">Netflix Germany</span>
				) : (
					<span id="netflix">Netflix Deutschland</span>
				)}
			</div>
		</div>
	);
}

export default Footer;
