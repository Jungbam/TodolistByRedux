import React from "react";
import { useSelector } from "react-redux";

const TodoDetail = () => {
  // const { page } = useParams();
  const { select } = useSelector((state) => state);
  const { title, content } = select[0];
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TodoDetail;
