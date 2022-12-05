import React from "react";
import {
  PageContainer,
  Star,
  Title,
} from "../../component/styleModule/styleIndex";

const Main = () => {
  return (
    <PageContainer bgColor="black">
      <Star width="30vw" height="30vw" radius="50%">
        <Title bgColor="none">항해 주특기 second Week 시작합니다.</Title>
      </Star>
    </PageContainer>
  );
};

export default Main;
