import React from "react";
import { Title, Wrapper } from "../../../component/styleModule/styleIndex";
import TodoCard from "./TodoCard";

const Article = ({ title, todos }) => {
  return (
    <>
      <Title fs="20px" ta="left">
        {title}
      </Title>
      <Wrapper width="90vw" height="40vh" shadow="2px 2px 6px #333">
        {todos?.map((el, i) => {
          return <TodoCard key={`dolist +${i}`} el={el} />;
        })}
      </Wrapper>
    </>
  );
};

export default Article;
