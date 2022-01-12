const express = require("express");
const router = express.Router();
const { deleteTodo } = require("../controllers/todoController");

router.delete("/todo/:id", deleteTodo);

module.exports = router;
