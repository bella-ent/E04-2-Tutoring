import React, { Component } from "react";

export default class ItemList extends Component {
	addCart = (item) => {
		this.props.setState({
			...this.props.state,
			visible: true,
			cart: [...this.props.state.cart, item],
		});
	};

	// addCart = this.addCart.bind(this);
	render() {
		return (
			<div className="item-container">
				{this.props.items.map((item) => (
					<div className="item-card">
						<img id="item-img" src={item.image} alt="img" />
						<h4>{item.title}</h4>
						<h4>{item.price}</h4>
						<button onClick={() => this.addCart(item)}>Add to Cart</button>
					</div>
				))}
			</div>
		);
	}
}
