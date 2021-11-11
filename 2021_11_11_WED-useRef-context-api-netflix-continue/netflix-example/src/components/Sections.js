import React from "react";

function Sections({ props: { title, detail, img } }) {
	// const { title, detail, img } = props.props;
	return (
		<div className="section-con">
			<div className="description">
				<h1>{title}</h1>
				<h3>{detail}</h3>
			</div>
			<img src={img} alt="img" />
		</div>
	);
}

export default Sections;
