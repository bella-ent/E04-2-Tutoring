import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const [name, setName] = useState("");

	//! I'm sorry, Hengameh.. I checked it again, it doesn't work... T_T
	//! it returns undefined
	// const search = (e) => {
	// 	e.preventDefault();
	// 	navigate(`/planets/find/${e.target.value}`);
	// };

	const search = (e) => {
		e.preventDefault();
		navigate(`/planets/find/${name}`);
	};

	return (
		<div className="home-bg" id="flex-jc-ac-wr">
			<div id="search-con">
				<h1>You can find information about planets here</h1>
				<div>
					<h2>Please write a planet's name below.</h2>
				</div>
				<form action="" onSubmit={search}>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<button>Search</button>
				</form>
			</div>
		</div>
	);
}

export default Home;
