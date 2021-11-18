import React, { useContext, useRef, useEffect } from "react";
import { ShowContext } from "../../contexts/ShowContext";
import { Modal } from "react-bootstrap";

function SignUp() {
	const { showSignUp, setShowSignUp, userData, setUserData } =
		useContext(ShowContext);

	const name = useRef();
	const email = useRef();
	const password = useRef();
	const rePassword = useRef();

	function submitData(e) {
		e.preventDefault();
		if (password.current.value === rePassword.current.value) {
			setUserData([
				...userData,
				{
					name: name.current.value,
					email: email.current.value,
					password: password.current.value,
					rePassword: rePassword.current.value,
				},
			]);
			alert(`You're successfully registered. Hello ${name.current.value}`);
			setShowSignUp(false);
		} else {
			alert("Check your password.");
		}
	}

	//! 1) Click Sign Up button => save user data to userData using setUserData.
	//! 2) Whenever userData is changed, it is saved on the local storage.

	useEffect(() => {
		//* window.localStorage.setItem(KEY, VALUE("string"))
		window.localStorage.setItem("users", JSON.stringify(userData));
	}, [userData]);

	//* window.localStorage.setItem("users", JSON.stringify(userData)); => saving data on localStorage
	//* JSON.parse(window.localStorage.getItem("users")) => get data from localStorage
	return (
		<Modal
			size="lg"
			show={showSignUp}
			onHide={() => setShowSignUp(false)}
			aria-labelledby="example-modal-sizes-title-lg"
		>
			<Modal.Header closeButton>
				<Modal.Title id="example-modal-sizes-title-lg">Sign Up</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form action="" method="" onSubmit={submitData}>
					<div class="container">
						<p>Please fill in this form to create an account.</p>
						<label htmlFor="text">Name</label>
						<input
							type="text"
							placeholder="Enter Name"
							name="name"
							ref={name}
							required
						/>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							placeholder="Enter Email"
							name="email"
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
						<label htmlFor="re-psw">Repeat Password</label>
						<input
							type="password"
							placeholder="Repeat Password"
							name="re-psw"
							ref={rePassword}
							required
						/>

						<button onClick={submitData} type="submit" id="login">
							Sign Up
						</button>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
}

export default SignUp;
