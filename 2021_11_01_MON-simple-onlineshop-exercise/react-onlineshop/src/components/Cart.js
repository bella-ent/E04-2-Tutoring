import React, { Component } from "react";

export default class Cart extends Component {
	componentDidUpdate() {
		if (this.props.cart.length >= 1) alert("The item is added to your cart.");
	}
	removeCart = () => {
		this.props.setState({ ...this.props.state, visible: false });
	};

	removeLists = () => {
		this.props.setState({ ...this.props.state, cart: [] });
	};
	render() {
		return (
			<div className={this.props.visible === false ? "hide" : "show"}>
				<button onClick={this.removeCart}> X </button>
				{this.props.cart.map((item) => (
					<div>
						Name: {item.title} // cost: {item.price}
					</div>
				))}
				<button onClick={this.removeLists}>Remove Lists</button>
			</div>
		);
	}
}
