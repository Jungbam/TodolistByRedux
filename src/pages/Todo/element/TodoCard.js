import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteList, detailList, doneList } from "../redux/module/todoReducer";
const TodoCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div id={`todo${el.id}`}>
      <div>
        <h2>{el.title}</h2>
        <Link to={`/about/${el.id}`}>
          <li onClick={(e) => dispatch(detailList(el.id))}>상세내용</li>
        </Link>
      </div>
      <p>{el.content}</p>
      <button onClick={(e) => dispatch(deleteList(el.id))}>삭제</button>
      <button onClick={(e) => dispatch(doneList(el.id))}>
        {el.isDone ? "완료" : "취소"}
      </button>
    </div>
  );
};

export default TodoCard;
