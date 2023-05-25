import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [action.payload, ...state];
    },
    deleteTask: (state, action) => {
      return state.filter((t) => t.id !== action.payload.id);
    },
    editTask: (state, action) => {
      return state.map((t) => {
        if (t.id === action.payload.id) {
          return { ...action.payload };
        }
        return t;
      });
    },
    deleteCompleted: (state) => {
        return state.filter(t => !t.checked);
    }
  },
});

export const { addTask, deleteTask, editTask, deleteCompleted } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer
