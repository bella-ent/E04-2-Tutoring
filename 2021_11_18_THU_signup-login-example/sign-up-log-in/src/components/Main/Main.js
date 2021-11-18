import React, { useState } from "react";
import { ShowContext } from "../../contexts/ShowContext";
import Login from "./Login";
import SignUp from "./SignUp";

function Main() {
	const [showSignUp, setShowSignUp] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	//!3: from Local Storage, we get data using window.localStorage.getItem.
	//! But this data type is "string", so you have to convert this data to normal array of object using JSON.parse.
	const [userData, setUserData] = useState(
		//* JSON.parse converts a string data to a normal array of object.
		() => JSON.parse(window.localStorage.getItem("users")) || []
	);
	//!4: if there is data on Local Storage, get data and save as the initial value of userData, otherwise just gave empty array as initial value of userData.
	function showSignUpModal() {
		setShowSignUp(true);
	}
	function showLoginModal() {
		setShowLogin(true);
	}
	return (
		<div className="main-con">
			<h1>Welcome Here!</h1>
			<h1>Do you have an account?</h1>
			<div>
				<button onClick={showSignUpModal}>Sign Up</button>
				<button onClick={showLoginModal}>Log In</button>
			</div>
			<ShowContext.Provider
				value={{
					showSignUp,
					setShowSignUp,
					userData,
					setUserData,
					showLogin,
					setShowLogin,
				}}
			>
				<SignUp />
				<Login />
			</ShowContext.Provider>
		</div>
	);
}

export default Main;
