import React from "react";
import TodoCard from "./TodoCard";

const Article = ({ title, todos }) => {
  return (
    <div>
      <h2>{title}</h2>
      {todos.map((el, i) => {
        return <TodoCard key={`dolist +${i}`} el={el} />;
      })}
    </div>
  );
};

export default Article;
