import React, { useState, useContext } from "react";
import { userContext } from "../contexts/userContext";
import { avatars } from "../data/avatars";

function ItemStore() {
	const { avatar, setAvatar, coin, setCoin } = useContext(userContext);
	const [showStore, setShowStore] = useState("innerStore");
	const changeAvatar = () => {
		const RandomNumber = Math.floor(Math.random() * avatars.length);
		if (coin < 50) {
			alert("Try to gain more coins!");
		} else {
			setAvatar(avatars[RandomNumber]);
			setCoin(coin - 50);
		}
	};
	return (
		<div
			className="store-con"
			onClick={() =>
				showStore === "innerStore"
					? setShowStore("showStore")
					: setShowStore("innerStore")
			}
		>
			<h1>Item Store</h1>
			<div className={showStore}>
				<img
					src="https://media2.giphy.com/media/xUOxfjsW9fWPqEWouI/giphy.gif"
					alt=""
					id="randombox"
					onClick={changeAvatar}
				/>
				<span>Random Box</span>
				<span>Cost: 50</span>
			</div>
		</div>
	);
}

export default ItemStore;
