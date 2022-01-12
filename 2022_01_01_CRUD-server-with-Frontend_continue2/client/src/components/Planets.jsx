import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Planets() {
	const navigate = useNavigate();
	//This should be the same name in the router's param of app.js
	const { name } = useParams();
	const [planetData, setPlanetData] = useState({});

	useEffect(() => {
		// axios
		// 	.get(`http://localhost:7070/planets/find/${name}`)
		// 	.then(({ data }) => {
		// 		setPlanetData(data);
		// 	},[]);
		axios
			.get(`http://localhost:7070/planets/find/${name}`)
			.then((res) => {
				setPlanetData(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div >
			<div>
				<h2>{planetData.name}</h2>
				<p>Mass: {planetData.mass}</p>
				<p>Diameter: {planetData.diameter}</p>
				<p>Density: {planetData.density}</p>
				<p>Number Of Moons : {planetData.numberOfMoons}</p>
			</div>
			<button onClick={() => navigate("/")}>Go To Home</button>
		</div>
	);
}

export default Planets;
