import React, { Component } from "react";

export default class LifeCycleClass extends Component {
	// title = "Hello!";
	state = {
		title: "Hi!!!!!!",
	};

	//* how can bind methods to this(class)
	//? 1)
	// changeH1 = () => {
	// 	this.title = "Bye!!!!!!";
	// 	console.log(this.title);
	// };
	//? 2)
	// changeH1() {
	// 	this.title = "Bye!!!!!!";
	// 	console.log(this.title);
	// }
	changeH1() {
		this.setState({ title: "say goodbye!!!!!!" });
	}
	changeH1 = this.changeH1.bind(this);
	//* 3 Life cycle methods (in Class component)
	componentDidMount() {
		console.log("Component was mounted");
	}
	componentDidUpdate() {
		console.log("Component was changed");
	}
	componentWillUnmount() {
		console.log("Component died.");
	}
	render() {
		return (
			<div>
				<h1 onClick={this.changeH1}>{this.state.title}</h1>
			</div>
		);
	}
}
