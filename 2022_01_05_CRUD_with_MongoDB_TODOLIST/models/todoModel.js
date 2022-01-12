const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: { type: String, require: true },
  detail: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

const Todo = model("Todo", todoSchema);

module.exports = Todo;
