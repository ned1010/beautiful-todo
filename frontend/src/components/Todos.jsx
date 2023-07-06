import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { editing } from "../redux";

//importing from material ui
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

//import all the action creators
import {
  getAllTodos,
  postTodo,
  deleteTodo,
  updateTodo,
} from "../redux/actions";
import Footer from "./Footer";
import Loading from "./Loading";
import Error from "./Error";

function Todos() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  // console.log(todos);

  //getting all the todos from the database
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const { todos, isEditing, updateId, loading, error } = useSelector(
    (state) => state.todo
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!todos) {
    return null;
  }

  //add a new list
  const addNewTodo = (todo) => {
    //condition
    //if not updating, then dispatch new item
    //else update
    if (!todo) {
      alert("Empty todo, enter a valid todo");
    } else if (todo && !isEditing) {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        text: todo,
        completed: false,
      };
      // dispatch(addTodo(newTodo));
      dispatch(postTodo(newTodo));
      window.location = "/";
    } else {
      //get the id to update
      const updateID = updateId;
      const updatedTodo = {
        id: updateID,
        text: todo,
      };
      //dispatch update
      dispatch(updateTodo(updatedTodo));
      window.location = "/";
    }
  };

  //delete
  const removeTodo = (id) => {
    //dispatch id to remove
    dispatch(deleteTodo(id));
    window.location = "/";
  };

  const update = (id) => {
    //make the item editable
    const itemToUpdate = todos.find((item) => item.id === id);
    setTodo(itemToUpdate.text);
    dispatch(editing(id));
  };

  //add the todo to the completed list
  const completedTodo = (id) => {
    //send update from here
    const itemToUpdate = todos.find((item) => item.id === id);
    const updatedTodo = {
      id: itemToUpdate.id,
      text: itemToUpdate.text,
      completed: true,
    };
    dispatch(updateTodo(updatedTodo));
    window.location = "/";
  };

  return (
    <div>
      <AddTodo addTodo={addNewTodo} todo={todo} setTodo={setTodo} />
      <div className="todo">
        <div className="alltodos">
          <h3 className="title">To do for today</h3>
          <div className="list-container">
            {todos
              .filter((item) => item.completed === false)
              .map((item) => {
                return (
                  <TodoList
                    key={item.id}
                    id={item.id}
                    todo={item.text}
                    onRemove={removeTodo}
                    onUpdate={update}
                    onComplete={completedTodo}
                  />
                );
              })}
          </div>
        </div>

        <div className="completed">
          <h3 className="title">Completed Todos</h3>
          <div className="list-container">
            {todos
              .filter((item) => item.completed === true)
              .map((item) => {
                return (
                  <ul key={item.id} id={item.id} className="todo-list">
                    <li>
                      {item.text}
                      <IconButton
                        color="error"
                        onClick={() => removeTodo(item.id)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Todos;
