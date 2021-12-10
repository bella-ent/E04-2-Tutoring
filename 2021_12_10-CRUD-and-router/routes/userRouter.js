const express = require("express");

const router = express.Router();

// module.exports = router;

router.use((req, res, next) => {
	console.log("middleware for users!");
	next();
});

//-----
const users = require("../data/users");
//-----

router.get("/", (req, res) => {
	res.status(201).json(users);
});

router.post("/add", (req, res) => {
	const newUser = {
		name: req.body.name,
		age: req.body.age,
		city: req.body.city,
		hobby: req.body.hobby,
	};
	users.push(newUser);
	return res.status(200).json({ newUser });
});

router.patch("/updatename/:name", (req, res) => {
	const user = users.find((user) => req.params.name === user.name);
	if (!user) {
		return res.status(500).send("User Not Found");
	} else {
		req.body.name ? (user.name = req.body.name) : user.name;
		return res.status(200).json({ updatedList: users });
	}
});

router.put("/updateall/:name", (req, res) => {
	const user = users.find((user) => req.params.name === user.name);
	if (!user) {
		return res.status(500).send("User Not Found");
	} else {
		req.body.name ? (user.name = req.body.name) : user.name;
		return res.status(200).json({ updatedList: users });
	}
});

router.delete("/delete/:id", (req, res) => {
	const user = users.find((user) => +user.id === +req.params.id);
	const indexOfSelectedUser = users.indexOf(user);
	users.splice(indexOfSelectedUser, 1);
	isNaN(+req.params.id)
		? res.status(500).send(`ID should be number.`)
		: user
		? res.status(200).json(users)
		: res.status(400).json("User Not Founded");
});

module.exports = router;
