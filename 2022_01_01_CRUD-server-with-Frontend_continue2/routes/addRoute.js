const express = require("express");
const router = express.Router();
const planetData = require("../data/fakeDatabase");

router.post("/planet", (req, res) => {
	//Date.now() : a time stamp (an unique number)
	const newPlanet = {
		id: planetData.length + 1,
		name: req.body.name,
		mass: req.body.mass,
		diameter: req.body.diameter,
		density: req.body.density,
		numberOfMoons: req.body.numberOfMoons,
		img: req.body.img,
	};
	planetData.push(newPlanet);
	return res.status(201).send({ success: true, data: newPlanet });
});

module.exports = router;
