import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000/todos";
//create all the thunk functions
export const getAllTodos = createAsyncThunk("/todos/getAllTodos", async () => {
  const response = await axios.get(url);
  return response.data;
});

//create post request
export const postTodo = createAsyncThunk("/todos/postTodo", async (todo) => {
  await axios.post(url, todo);
});

//create remove request
export const deleteTodo = createAsyncThunk("/todos/deleteTodo", async (id) => {
  await axios.delete(`${url}/${id}`, id);
});

//updateTodo
export const updateTodo = createAsyncThunk(
  "/todos/updateTodo",
  async (todo) => {
    const { id } = todo;
    await axios.put(`${url}/${id}`, todo);
  }
);
