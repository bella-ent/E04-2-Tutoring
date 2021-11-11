import React, { Component } from "react";

export default class GrandChild extends Component {
	render() {
		//* Destructuring
		let { greeting } = this.props;
		// this.props.setTest("Annyoung");
		return <div>{greeting}</div>;
	}
}
