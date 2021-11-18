import React, { useContext, useRef } from "react";
import { ShowContext } from "../../contexts/ShowContext";
import { UserContext } from "../../contexts/UserContext";
import { Modal } from "react-bootstrap";

function Login() {
	const { userData, setUserData, showLogin, setShowLogin } =
		useContext(ShowContext);
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const email = useRef();
	const password = useRef();
	function checkUser(e) {
		e.preventDefault();
		const matchedUser = userData.find(
			(el) =>
				el.email === email.current.value &&
				el.password === password.current.value
		);
		if (matchedUser) {
			alert(`Welcome! ${matchedUser.name}`);
			setShowLogin(false);
			setCurrentUser(matchedUser);
		}
	}

	return (
		<Modal
			size="lg"
			show={showLogin}
			onHide={() => setShowLogin(false)}
			aria-labelledby="example-modal-sizes-title-lg"
		>
			<Modal.Header closeButton>
				<Modal.Title id="example-modal-sizes-title-lg">Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form action="" method="" onSubmit={checkUser}>
					<div class="container">
						<label htmlFor="uname">Email</label>
						<input
							type="text"
							placeholder="Enter Username"
							name="uname"
							ref={email}
							required
						/>

						<label htmlFor="psw">Password</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="psw"
							ref={password}
							required
						/>

						<button type="submit" id="login">
							Login
						</button>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
}

export default Login;
