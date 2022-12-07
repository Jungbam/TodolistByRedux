import { todoReducertool } from "../module/todoReducertool";

const { configureStore } = require("@reduxjs/toolkit");

export const todoStore = configureStore({
  reducer: todoReducertool,
});
