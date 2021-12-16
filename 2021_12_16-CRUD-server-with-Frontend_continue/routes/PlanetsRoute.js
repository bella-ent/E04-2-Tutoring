const express = require("express");
const router = express.Router();
const planetData = require("../data/fakeDatabase")

router.get("/", (req, res) => {
	res.status(200).send({ success: true, data: planetData });
});

router.get("/find/:name", (req, res) => {
	const foundPlanet = planetData.find((el) => {
		return el.name.toLowerCase() === req.params.name.toLowerCase();
	});
	if (foundPlanet) {
		res.status(200).send({ success: true, data: foundPlanet });
	} else {
		res.status(404).send({ success: false, data: "Planet not found" });
	}
});

module.exports = router;
