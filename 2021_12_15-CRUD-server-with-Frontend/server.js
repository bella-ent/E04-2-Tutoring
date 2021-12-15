const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PlanetsRoute = require("./routes/PlanetsRoute");
const addRoute = require("./routes/addRoute");

//Don't forget run express.json middleware to get data as json form.
app.use(express.json());
//it allows us to use  .env file.
dotenv.config();

const port = process.env.PORT || 4000;

app.use("/planets", PlanetsRoute);
app.use("/add", addRoute);

app.listen(port, () => {
	console.log(`Bella's sever is running on ${port}`);
});
