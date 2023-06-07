import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

function TodoList({ id, todo, onRemove, onUpdate, onComplete }) {
  return (
    <ul className="list" key={id} id={id}>
      <li>
        {todo}
        <IconButton
          color="success"
          onClick={() => onComplete(id)}
          sx={{ marginLeft: "5px" }}
        >
          <TaskAltIcon
            sx={{
              fontSize: "20px",
            }}
          />
        </IconButton>
        <IconButton color="secondary" onClick={() => onUpdate(id)}>
          <ModeEditIcon sx={{ fontSize: "20px", marginLeft: "-10px" }} />
        </IconButton>
        <IconButton color="error" onClick={() => onRemove(id)}>
          <DeleteForeverIcon sx={{ fontSize: "20px", marginLeft: "-10px" }} />
        </IconButton>
      </li>
    </ul>
  );
}

export default TodoList;
