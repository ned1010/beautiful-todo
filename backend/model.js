//Mongoose library for maintaining the database module
const mongoose = require("mongoose");

//Scheme -> basic structure of database
const todoSchema = mongoose.Schema({
  id: { type: Number },
  text: { type: String },
  completed: { type: Boolean },
});

//created a model of the todo
const TodoModel = mongoose.model("todos", todoSchema);

//export Todo Model to other node modules
//provides interface to use in other files
module.exports = TodoModel;
