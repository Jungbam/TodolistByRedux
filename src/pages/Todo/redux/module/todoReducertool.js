import { createSlice } from "@reduxjs/toolkit";
import { getList, getLocal, setLocal } from "../util/todoutil";

const initial = {
  todo: getLocal() ?? [],
  done: getLocal() ? getLocal()?.filter((el) => el.isDone === true) ?? [] : [],
  notDone: getLocal()
    ? getLocal()?.filter((el) => el.isDone === false) ?? []
    : [],
  select: {},
};

export const todoReducertool = createSlice({
  name: "todo",
  initialState: initial,
  reducers: {
    addList: (state, action) => {
      const todo = { ...action.payload };
      setLocal([...state.todo, todo]);
      return {
        ...state,
        todo: [...state.todo, todo],
        done: getList([...state.todo, todo]).done,
        notDone: getList([...state.todo, todo]).notDone,
      };
    },
    doneList: (state, action) => {
      const doneDo = state.todo.map((el) =>
        el.id === action.payload ? { ...el, isDone: !el.isDone } : el
      );
      setLocal(doneDo);
      return {
        ...state,
        todo: doneDo,
        done: getList(doneDo).done,
        notDone: getList(doneDo).notDone,
      };
    },
    deleteList: (state, action) => {
      const deleteDo = state.todo.filter((el) => el.id !== action.payload);
      setLocal(deleteDo);
      return {
        ...state,
        todo: deleteDo,
        done: getList(deleteDo).done,
        notDone: getList(deleteDo).notDone,
      };
    },
    detailList: (state, action) => {
      const detailDo = state.todo.filter((el) => el.id === action.payload);
      return { ...state, select: { ...detailDo } };
    },
  },
});

export const { addList, doneList, deleteList, detailList } =
  todoReducertool.actions;
export default todoReducertool.reducer;
