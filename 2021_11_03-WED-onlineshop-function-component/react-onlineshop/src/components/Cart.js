import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Cart({ cart, setCart, visible, setVisible }) {
	const history = useHistory();
	function deleteCart() {
		setVisible(false);
	}

	useEffect(() => {
		return () => {
			const question = window.confirm("Do you want to leave the main page?");
			if (!question) history.push("/");
		};
	}, []);
	useEffect(() => {
		if (cart.length >= 1) alert("The item is added to your cart.");
	}, [cart]);
	function goPay() {
		history.push("/pay");
	}
	return (
		<div className={visible === true ? "show" : "hide"}>
			<span id="delete" onClick={deleteCart}>
				x
			</span>
			{cart.map((item) => (
				<div className="cart-item">
					<span>item: {item.title}</span>
					<span>number: {item.number}</span>
				</div>
			))}

			<button onClick={goPay} className="buy-btn">
				Buy Now
			</button>
		</div>
	);
}

export default Cart;
