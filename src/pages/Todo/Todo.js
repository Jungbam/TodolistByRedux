import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "./element/Article";
import { addList } from "./redux/module/todoReducer";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
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
    if (!input.title || !input.content) {
      alert("입력한 값을 확인하세요.");
      return;
    }
    const doc = {
      id: uuidv4(),
      title: input.title,
      content: input.content,
      isDone: false,
    };
    dispatch(addList(doc));
    setInput({
      title: "",
      content: "",
    });
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
          width="200px"
          value={input.title}
          change={onChangeHandler}
          margin="5px"
          holder="제목"
        ></Input>
        <Input
          type="text"
          width="400px"
          name="content"
          value={input.content}
          change={onChangeHandler}
          margin="5px"
          holder="내용"
        ></Input>
        <Button
          radius="6px"
          bgColor="grey"
          color="white"
          border="none"
          shadow="inset 2px 2px 6px #333"
          onClick={onClickHandler}
        >
          추가하기
        </Button>
      </article>
      <article>
        <Article title="working..." todos={notDone} />
        <Article title="done..." todos={done} />
      </article>
    </PageContainer>
  );
};

export default Todo;
