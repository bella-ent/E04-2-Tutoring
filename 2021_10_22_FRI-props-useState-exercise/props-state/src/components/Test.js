import React from "react";
import GrandChild from "./GrandChild";

function Test(props) {
	// // console.log(greeting);
	// // console.log(fruit);
	// console.log(hello);
	props.setTest("Hallo");
	return (
		<div>
			<h3>{props.test}</h3>
			<GrandChild test={props.test} setTest={props.setTest} />
		</div>
	);
}

export default Test;
