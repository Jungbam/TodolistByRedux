export const getList = (todo) => {
  const notDone = todo.filter((el) => el.isDone === false);
  const done = todo.filter((el) => el.isDone === true);
  return { notDone, done };
};
export const getLocal = () => {
  return JSON.parse(localStorage.getItem("todolist"));
};

export const setLocal = (todo) => {
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
