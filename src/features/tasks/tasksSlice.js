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
    },
    reorder: (state, action) => {
      const {startIndex, endIndex} = action.payload;
      const result = state.slice();
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
    
      return result;
    }
  },
});

export const { addTask, deleteTask, editTask, deleteCompleted, reorder } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer
