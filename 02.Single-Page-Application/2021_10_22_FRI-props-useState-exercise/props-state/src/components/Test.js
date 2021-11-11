import React from "react";
import GrandChild from "./GrandChild";

function Test({ greeting }) {
	// // console.log(greeting);
	// // console.log(fruit);
	// console.log(hello);
	// props.setTest("Hallo");
	// greeting = "Annyoeng";
	return (
		<div>
			<h3>{greeting}</h3>
			<GrandChild greeting={greeting} />
			{/* <GrandChild test={props.test} setTest={props.setTest} /> */}
		</div>
	);
}

export default Test;
