import React, { useContext } from "react";
import GrandChild from "./GrandChild";
// import myContext from "../contexts/ColorContext";
 
function Child() {
	// const { color, bgColor } = useContext(myContext);
	// const contexts = useContext(myContext);
	return (
		<div>
			<h2>Hi from Child component</h2>
			<GrandChild />
		</div>
	);
}

export default Child;
