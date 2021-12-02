import React, { useContext, useState } from "react";
import { userContext } from "../contexts/userContext";
import { avatars } from "../data/avatars";

function User() {
	const {
		userName,
		setUserName,
		coin,
		setShowMain,
		userRefName,
		avatar,
		setAvatar,
	} = useContext(userContext);
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
			<div className="avatar-con">
				<img src={avatar.url} alt="" id="avatar" />
				<button onClick={logOut}>Log Out</button>
			</div>
		</div>
	);
}

export default User;
