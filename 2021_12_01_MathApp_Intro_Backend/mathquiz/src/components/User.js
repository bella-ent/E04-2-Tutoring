import React, { useContext, useState } from "react";
import { userContext } from "../contexts/userContext";
import { avatars } from "../data/avatars";

function User() {
	const { userName, setUserName, coin, setShowMain, userRefName } =
		useContext(userContext);
	const [avatar, setAvatar] = useState(avatars[0]);
	const changeAvatar = () => {
		const RandomNumber = Math.floor(Math.random() * avatars.length);
		setAvatar(avatars[RandomNumber]);
	};
	const logOut = () => {
		setUserName("");
		setShowMain(true);
		userRefName.current.value = "";
	};
	return (
		<div>
			<h3>Hi! {userName}</h3>
			<div className="coin-box">
				<span>Your coins: </span>
				<img
					src="https://i.pinimg.com/originals/c1/2d/c5/c12dc536b8f8797b629eb9942a2dbbf1.gif"
					alt=""
					id="coin"
				/>
				<span>x {coin}</span>
			</div>
			<img src={avatar.url} alt="" id="avatar" />
			<button onClick={changeAvatar}>Change Character</button>
			<button onClick={logOut}>Log Out</button>
		</div>
	);
}

export default User;
