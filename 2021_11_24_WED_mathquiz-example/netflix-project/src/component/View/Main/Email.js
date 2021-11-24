import React, {useContext} from 'react'
import { InputGroup, Form, Button } from "react-bootstrap";
import LanguageContext from '../../../context/LanguageContext';

function Email() {
    const { lang } = useContext(LanguageContext);
    return (
			<div className="email">
				<div className="contents">
					{lang === "en" ? (
						<p id="email-des">
							Ready to watch? Enter your email to create or restart your
							membership.
						</p>
					) : (
						<p id="email-des">
							Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre
							Mitgliedschaft zu beginnen oder zu reaktivieren.
						</p>
					)}
					<InputGroup className="mb-3">
						<Form.Control type="email" placeholder="Email address" />
						<Button variant="danger" id="button-addon2">
							{lang === "en" ? "Get Started >" : "Loslegen >"}
						</Button>
					</InputGroup>
				</div>
			</div>
		);
}

export default Email
