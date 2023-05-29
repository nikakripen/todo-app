import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../features/tasks/tasksSlice";
import localStorageMiddleware from "./localStorageMiddleware";
import { loadFromLocalStorage } from "./localStorageRepository";

const preloadedState = loadFromLocalStorage() ?? { tasks: [] };
export default configureStore({
  reducer: {
    tasks: tasksSlice,
  },
  preloadedState: preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
