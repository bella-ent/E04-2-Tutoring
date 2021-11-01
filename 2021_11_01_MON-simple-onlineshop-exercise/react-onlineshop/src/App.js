import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";

export default class App extends Component {
	state = {
		items: [],
		isLoading: true,
		visible: false,
		cart: [],
	};
	async componentDidMount() {
		const response = await fetch("https://fakestoreapi.com/products");
		const result = await response.json();
		this.setState({ items: result, isLoading: false });
	}
	// setState = this.setState.bind(this);
	render() {
		console.log(this.state.items);
		return (
			<div>
				<Header />
				{this.state.isLoading ? (
					<img
						src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2a6dae53616869.593a85ce553c4.gif"
						alt="loading"
					/>
				) : (
					<ItemList
						state={this.state}
						items={this.state.items}
						//! If you want to use setState outside original component, you should bind it first.
						setState={this.setState.bind(this)}
					/>
				)}
				<Cart
					state={this.state}
					cart={this.state.cart}
					visible={this.state.visible}
					setState={this.setState.bind(this)}
				/>
			</div>
		);
	}
}
