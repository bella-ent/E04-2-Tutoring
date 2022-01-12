const express = require("express");
const router = express.Router();
const { addTodo } = require("../controllers/todoController");

//add todo to our database
router.post("/todo", addTodo);

module.exports = router;
