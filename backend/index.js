//importing libraries
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//importing database model
const TodoModel = require("./model");

//Instance of express application
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Mongoose connection
// const url = "mongodb://localhost:27017/todoDB";
const production_url = process.env.MONGODB_URL;
mongoose
  .connect(production_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`Server listening to Port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(`Error ${error}`);
  });

//CRUD operations
//create a front page where I can welcome everyone to the page
app.get("/", (req, res) => {
  res.send("Hi there");
});

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await TodoModel.find({});
    res.json(todos);
  } catch (err) {
    console.log(`Error ${err}`);
    res.status(404).send("Invalid request");
  }
});

// add a new todo
app.post("/todos", async (req, res) => {
  try {
    const { id, text, completed } = req.body;
    // console.log(id, text, completed);
    //create a newTodo in the todoSchema format
    const newTodo = new TodoModel({
      id: id,
      text: text,
      completed: completed,
    });
    //save todo to the database
    await newTodo.save();

    //add to head
    res.send("New Todo Inserted");
  } catch (err) {
    console.log(`Error ${err}`);
    res.status(404).send("Invalid Request");
  }
});

//Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newTodo = req.body;
    // console.log(newTodo.text);
    await TodoModel.updateOne(
      { id: id },
      { $set: { text: newTodo.text, completed: newTodo.completed } }
    );
    res.send("Updated");
  } catch (err) {
    console.log(`error ${err}`);
  }
});
//Remove a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await TodoModel.deleteOne({ id: id });
    res.send("Item deleted");
  } catch (err) {
    console.log(`Error ${err}`);
    res.statusCode(404).send("Invalid request to delete");
  }
});
