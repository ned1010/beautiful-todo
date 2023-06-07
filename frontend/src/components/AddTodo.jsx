import React from "react";
import AddTaskSharpIcon from "@mui/icons-material/AddTaskSharp";
import { OutlinedInput, Button } from "@mui/material";

function AddTodo({ addTodo, todo, setTodo }) {
  const submitHandle = (e) => {
    e.preventDefault();
    // console.log("clicked to submit");
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="form" onSubmit={submitHandle}>
      <OutlinedInput
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        value={todo}
        placeholder="Add Task"
        sx={{
          padding: "10px",
          borderRadius: "10px",
          width: "250px",
          height: "40px",
        }}
        className="input"
      />

      <Button
        className="add-btn"
        variant="contained"
        type="submit"
        startIcon={<AddTaskSharpIcon />}
        sx={{
          marginLeft: 2,
          "@media (max-width: 577px)": {
            marginTop: "10px",
          },
        }}
      >
        Add
      </Button>
    </form>
  );
}

export default AddTodo;
