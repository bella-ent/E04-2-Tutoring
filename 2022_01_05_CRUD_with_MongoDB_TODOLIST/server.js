const express = require("express");
const app = express();
//const dotenv = require('dotenv')
//dotenv.config()
require("dotenv").config();
const todoRoute = require("./routes/todoRoute");
const addRoute = require("./routes/addRoute");
const deleteRoute = require("./routes/deleteRoute");

const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json(), cors());

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const port = PORT || 3030;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log(`Successfully connected to the database!`))
  .catch((error) => console.log(`error occurred. ${error}`));

//see whole todolists
app.use("/all", todoRoute);
//add todo to our database
app.use("/add", addRoute);
//delete todo from our database
app.use("/delete", deleteRoute);

app.listen(port, () => console.log(`Server is running on ${port}🎡`));
