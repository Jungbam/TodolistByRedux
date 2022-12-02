import { createStore } from "redux";
import { todoReducer } from "../module/todoReducer";

export const todoStore = createStore(todoReducer);
