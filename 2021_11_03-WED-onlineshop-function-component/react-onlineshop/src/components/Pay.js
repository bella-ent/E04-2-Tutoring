import React from "react";
import { useHistory } from "react-router-dom";

function Pay({ cart, setCart, order, setOrder }) {
	const history = useHistory();
	function addOrder() {
		history.push("/order");
		setOrder(cart);
		setCart([]);
	}
	return (
		<div>
			<h1>Here you can pay your items</h1>
			{cart.map((item) => (
				<ul>
					<li>
						{item.title} {item.price}
					</li>
				</ul>
			))}
			<button onClick={addOrder}>Buy Now</button>
		</div>
	);
}

export default Pay;
