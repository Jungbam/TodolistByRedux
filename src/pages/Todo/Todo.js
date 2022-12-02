import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "./element/Article";
import { addList } from "./redux/module/todoReducer";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const { notDone, done } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    const doc = {
      id: uuidv4(),
      title: input.title,
      content: input.content,
      isDone: false,
    };
    dispatch(addList(doc));
  };
  return (
    <>
      <article>
        <h1>TodoList</h1>
      </article>
      <article>
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={onChangeHandler}
        ></input>
        <input
          type="text"
          name="content"
          value={input.content}
          onChange={onChangeHandler}
        ></input>
        <button type="button" onClick={onClickHandler}>
          추가하기
        </button>
      </article>
      <article>
        <Article title="working..." todos={notDone} />
        <Article title="done..." todos={done} />
      </article>
    </>
  );
};

export default Todo;
