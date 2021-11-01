import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>Online Shop</h1>
				<img
					id="cart"
					src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559874.jpg"
					alt="cart"
				/>
			</div>
		);
	}
}
