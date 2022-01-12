const Todo = require("../models/todoModel");

const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      title: req.body.title,
      detail: req.body.detail,
    });
    return res.status(201).json({ message: "Note created", newTodo });
  } catch (error) {
    return res.status(400).json({ message: "fail to create a note", error });
  }
};

const seeTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({ message: "success", todos });
  } catch (error) {
    return res.status(400).json({ message: "cannot get todo lists", error });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json("Todo not found");
    }
    return res.status(200).json({ message: "Note deleted", deletedTodo });
  } catch (error) {
    return res.status(400).json({ message: "fail to delete the note", error });
  }
};

module.exports = { addTodo, seeTodo, deleteTodo };
