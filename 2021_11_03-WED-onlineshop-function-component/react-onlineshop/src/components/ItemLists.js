import React from "react";

function ItemLists({ items, cart, setCart, setVisible }) {
	// const { item } = props;
	function addCart(item) {
		setCart([...cart, item]);
		setVisible(true);
	}
	return (
		<div className="item-list">
			{items.map((item, index) => (
				<div key={index} className="item-box">
					<img src={item.image} alt="img" className="item-img" />
					<div className="detail">
						<h3>{item.title}</h3>
						<h4>{item.price}</h4>
						<button onClick={() => addCart(item)}>Add to Cart</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default ItemLists;
