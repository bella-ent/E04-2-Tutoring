import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import User from "./components/User";
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
	const [userData, setUserData] = useState(
		//* JSON.parse converts a string data to a normal array of object.
		() => JSON.parse(window.localStorage.getItem("users")) || []
	);
	const [currentUser, setCurrentUser] = useState();

	// useEffect(() => {}, [currentUser]);
	return (
		<BrowserRouter>
			<div className="App">
				<UserContext.Provider
					value={{ userData, setUserData, currentUser, setCurrentUser }}
				>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/user" element={<User />} />
					</Routes>
				</UserContext.Provider>
			</div>
		</BrowserRouter>
	);
}

export default App;
