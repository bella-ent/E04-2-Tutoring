import React, { Component } from "react";

export default class StateClass extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { name: "Anass" };
	// }
	state = { name: "Anass" };
	// setState = this.setState.bind(this);
	// changeH1() {
	// 	this.setState({ name: "Felix" });
	// 	// console.log(this.state);
	// }
	// changeH1 = this.changeH1.bind(this);
	changeH1 = () => {
		this.setState({ name: "Felix" });
	};
	render() {
		return (
			<div>
				<h1 onClick={this.changeH1}> {this.state.name}</h1>
			</div>
		);
	}
}

// rcc = class components
// rfce = function components
