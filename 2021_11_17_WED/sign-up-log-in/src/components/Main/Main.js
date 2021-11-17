import React, { useState } from "react";
import { ShowContext } from "../../contexts/ShowContext";
import Login from "./Login";
import SignUp from "./SignUp";

function Main() {
	const [showSignUp, setShowSignUp] = useState(false);
	const [userData, setUserData] = useState(
		() => JSON.parse(window.localStorage.getItem("users")) || []
	);
	function showSignUpModal() {
		setShowSignUp(true);
	}
	return (
		<div className="main-con">
			<h1>Welcome Here!</h1>
			<h1>Do you have an account?</h1>
			<div>
				<button onClick={showSignUpModal}>Sign Up</button>
				<button>Log In</button>
			</div>
			<ShowContext.Provider
				value={{ showSignUp, setShowSignUp, userData, setUserData }}
			>
				<SignUp />
				<Login />
			</ShowContext.Provider>
		</div>
	);
}

export default Main;
