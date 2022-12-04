import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "./element/Article";
import { addList } from "./redux/module/todoReducer";
import { v4 as uuidv4 } from "uuid";
import {
  Input,
  PageContainer,
  Title,
} from "../../component/styleModule/styleIndex";

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
    <PageContainer
      bgColor={"whiteSmoke"}
      justify={"flex-start"}
      direction="column"
      padding="10px"
    >
      <article>
        <Title fw="800">TodoList</Title>
      </article>
      <article>
        <Input
          type="text"
          name="title"
          value={input.title}
          change={onChangeHandler}
          margin="5px"
        ></Input>
        <Input
          type="text"
          name="content"
          value={input.content}
          change={onChangeHandler}
          margin="5px"
        ></Input>
        <button type="button" onClick={onClickHandler}>
          추가하기
        </button>
      </article>
      <article>
        <Article title="working..." todos={notDone} />
        <Article title="done..." todos={done} />
      </article>
    </PageContainer>
  );
};

export default Todo;
