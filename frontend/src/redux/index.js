import { createSlice } from "@reduxjs/toolkit";
import { getAllTodos, postTodo, deleteTodo, updateTodo } from "./actions";

const initialState = {
  todos: [],
  isEditing: false,
  updateId: null,
  loading: null,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    editing: (state, action) => {
      state.isEditing = !state.isEditing;
      state.updateId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state, action) => {
        state.loading = true;
        state.todos = null;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        console.log("deleted");
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        console.log("updated");
      });
  },
});

export const { editing } = todoSlice.actions;
export default todoSlice;
