const express = require("express");
const dotenv = require("dotenv").config();
//making server app
const app = express();
const PORT = process.env.PORT || 7000;
const userRouter = require("./routes/userRouter");

app.use(express.json());
//2nd way to handle path and register methods.
// app
// 	.route("/user")
// 	.get((req, res) => {
// 		res.status(200).send("path: /, method: GET");
// 	})
// 	.post((req, res) => {
// 		res.status(200).send("path: /, method: POST");
// 	});

// app
// 	.route("/user/:id")
// 	.patch((req, res) => {
// 		res.status(200).send(`path: /user/:id, method: patch, id:${req.params.id}`);
// 	})
// 	.delete((req, res) => {
// 		res
// 			.status(200)
// 			.send(`path: /user/:id, method: delete, id:${req.params.id}`);
// 	});

app.use("/user", userRouter);

app.listen(PORT, () => {
	console.log(`Bella's server is running on ${PORT}`);
});
