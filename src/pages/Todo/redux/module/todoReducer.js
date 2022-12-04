const ADD_TODO = "ADD_TODO";
const DONE_TODO = "DONE_TODO";
const DELETE_TODO = "DELETE_TODO";
const DETAIL_TODO = "DETAIL_TODO";

export const addList = (payload) => ({ type: ADD_TODO, payload });
export const doneList = (payload) => ({ type: DONE_TODO, payload });
export const deleteList = (payload) => ({ type: DELETE_TODO, payload });
export const detailList = (payload) => ({ type: DETAIL_TODO, payload });

const getLocal = () => {
  return JSON.parse(localStorage.getItem("todolist"));
};
const setLocal = (todo) => {
  localStorage.setItem("todolist", JSON.stringify(todo));
  localStorage.setItem(
    "done",
    JSON.stringify(todo?.filter((el) => el.isDone === true))
  );
  localStorage.setItem(
    "notDone",
    JSON.stringify(todo?.filter((el) => el.isDone === false))
  );
};

const initial = {
  todo: getLocal() ?? [],
  done: getLocal() ? getLocal()?.filter((el) => el.isDone === true) ?? [] : [],
  notDone: getLocal()
    ? getLocal()?.filter((el) => el.isDone === false) ?? []
    : [],
  select: {},
};

const getList = (todo) => {
  const notDone = todo.filter((el) => el.isDone === false);
  const done = todo.filter((el) => el.isDone === true);
  return { notDone, done };
};

export const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = { ...action.payload };
      setLocal([...state.todo, todo]);
      return {
        ...state,
        todo: [...state.todo, todo],
        done: getList([...state.todo, todo]).done,
        notDone: getList([...state.todo, todo]).notDone,
      };
    case DONE_TODO:
      const doneId = action.payload;
      const doneDo = state.todo.map((el) =>
        el.id === doneId ? { ...el, isDone: !el.isDone } : el
      );
      setLocal(doneDo);
      return {
        ...state,
        todo: doneDo,
        done: getList(doneDo).done,
        notDone: getList(doneDo).notDone,
      };
    case DELETE_TODO:
      const deleteId = action.payload;
      const deleteDo = state.todo.filter((el) => el.id !== deleteId);
      setLocal(deleteDo);
      return {
        ...state,
        todo: deleteDo,
        done: getList(deleteDo).done,
        notDone: getList(deleteDo).notDone,
      };
    case DETAIL_TODO:
      const detailId = action.payload;
      const detailDo = state.todo.filter((el) => el.id === detailId);
      return { ...state, select: { ...detailDo } };
    default:
      return state;
  }
};
