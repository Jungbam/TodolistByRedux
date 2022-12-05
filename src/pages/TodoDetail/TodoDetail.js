import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Absolute from "../../component/styleModule/Absolute";
import {
  Button,
  PageContainer,
  Star,
  Title,
  Wrapper,
} from "../../component/styleModule/styleIndex";

const TodoDetail = () => {
  const { select } = useSelector((state) => state);
  const { title, content } = select[0];
  const navigate = useNavigate();
  return (
    <PageContainer bgColor="darkblue">
      <Star
        bgColor="#eee"
        width="300px"
        height="300px"
        radius="50%"
        direction="column"
      >
        <Wrapper direction="column" bgColor="none" height="20%">
          <Title bgColor="none" margin="10px auto">
            제목 : {title}
          </Title>
          <Button
            bgColor="whiteSmoke"
            color="black"
            radius="12px"
            shadow="inset 2px 2px 2px #333"
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
        </Wrapper>
        <p>내용 : {content}</p>
      </Star>
    </PageContainer>
  );
};

export default TodoDetail;
