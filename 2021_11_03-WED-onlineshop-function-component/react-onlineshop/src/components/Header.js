import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div id="header">
			<h1 id="shop-title">ANASS MODE</h1>
			<Link to="/order">
				<h3 id="orders">ORDER</h3>
			</Link>
			<img
				src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559874.jpg"
				alt="go to cart"
				id="header-cart"
			/>
		</div>
	);
}

export default Header;
