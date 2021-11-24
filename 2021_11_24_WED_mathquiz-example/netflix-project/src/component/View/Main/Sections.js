import React from 'react'

function Sections({ props: { id, title, detail, img } }) {
	return (
		<div id={id} className="cards">
			<div className="contents">
				<h1 className="card-title">{title}</h1>
				<span className="card-detail">{detail}</span>
			</div>
			<img src={img} alt="img" />
		</div>
	);
}

export default Sections
