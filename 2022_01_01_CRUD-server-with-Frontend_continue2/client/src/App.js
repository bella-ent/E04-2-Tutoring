import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/planets/find/:name" element={<Planets />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
