import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import User from "./components/User";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/" element={<User />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
