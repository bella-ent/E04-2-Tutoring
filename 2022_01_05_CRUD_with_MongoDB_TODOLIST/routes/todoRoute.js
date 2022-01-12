const express = require("express");
const router = express.Router();
const { seeTodo } = require("../controllers/todoController");

//see whole todolists
router.get("/todo", seeTodo);

module.exports = router;
