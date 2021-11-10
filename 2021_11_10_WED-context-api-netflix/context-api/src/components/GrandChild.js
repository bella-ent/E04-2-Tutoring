import React, { useContext } from "react";
import myContext from "../contexts/ColorContext";

function GrandChild() {
	const { color } = useContext(myContext);
	return (
		<div>
			<h3 style={{ color: color }}>Hello from GrandChild component</h3>
		</div>
	);
}

export default GrandChild;
