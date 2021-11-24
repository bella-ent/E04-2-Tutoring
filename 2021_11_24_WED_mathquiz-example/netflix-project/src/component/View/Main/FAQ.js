import React, {useContext} from 'react'
import { Accordion } from "react-bootstrap";
import LanguageContext from '../../../context/LanguageContext';
import faqDe from '../../../data/faqDe';
import faqEn from '../../../data/faqEn';

function FAQ() {
	const { lang, setLang } = useContext(LanguageContext);
    return (
			<div className="faq">
				{lang === "en" ? <h1>{faqEn.title}</h1> : <h1>{faqDe.title}</h1>}
				<Accordion id="accordion-con">
					{lang === "en"
						? faqEn.data.map(({ question, answer }, index) => (
								<Accordion.Item id="accordion-item" eventKey={index}>
									<Accordion.Header id="dark-button">
										{question}
									</Accordion.Header>
									<Accordion.Body id="accordion-body">{answer}</Accordion.Body>
								</Accordion.Item>
						  ))
						: faqDe.data.map(({ question, answer }, index) => (
								<Accordion.Item id="accordion-item" eventKey={index}>
									<Accordion.Header id="dark-button">
										{question}
									</Accordion.Header>
									<Accordion.Body id="accordion-body">{answer}</Accordion.Body>
								</Accordion.Item>
						  ))}
				</Accordion>
			</div>
		);
}

export default FAQ
