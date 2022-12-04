import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Card } from "../../../component/styleModule/styleIndex";
import { deleteList, detailList, doneList } from "../redux/module/todoReducer";
const TodoCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <Card
      width="150px"
      height="150px"
      justify="flex-start"
      direction="column"
      padding="5px"
      radius="12px"
      shadow="2px 2px 6px #333"
      margin="2px"
      id={`todo${el.id}`}
    >
      <Card justify={"space-between"}>
        <h2>{el.title}</h2>
        <NavLink to={`/about/${el.id}`} style={{ textDecoration: "none" }}>
          <li onClick={(e) => dispatch(detailList(el.id))}>상세내용</li>
        </NavLink>
      </Card>
      <Card border={"0.5px solid grey"} shadow={"0px 0px 3px grey"}>
        <p>{el.content}</p>
      </Card>
      <Card justify={"space-around"}>
        <Button
          border="1px solid grey"
          radius="6px"
          bgColor="grey"
          color="white"
          onClick={(e) => dispatch(deleteList(el.id))}
        >
          삭제
        </Button>
        <Button
          border="1px solid grey"
          radius="6px"
          bgColor="grey"
          color="white"
          onClick={(e) => dispatch(doneList(el.id))}
        >
          {el.isDone ? "완료" : "취소"}
        </Button>
      </Card>
    </Card>
  );
};

export default TodoCard;
