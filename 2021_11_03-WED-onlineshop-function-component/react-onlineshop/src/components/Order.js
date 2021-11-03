import React from "react";
import { useHistory } from "react-router-dom";

function Order({ order, setOrder }) {
	const history = useHistory();
	return (
		<div>
			<h1>Your Order</h1>
			{order.map((item) => (
				<ul>
					<li>
						{item.title} {item.price}
					</li>
				</ul>
			))}
			<button
				onClick={() => {
					history.push("/");
				}}
			>
				Go to Home
			</button>
		</div>
	);
}

export default Order;
