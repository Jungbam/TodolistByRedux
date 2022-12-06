import React from "react";
import {
  PageContainer,
  Star,
  Title,
} from "../../component/styleModule/styleIndex";

const Main = () => {
  return (
    <PageContainer bgColor="black">
      <Star bgColor="white" width="400px" height="400px" radius="50%">
        <Title bgColor="none">
          항해 주특기 second Week
          <br /> 시작합니다.
        </Title>
      </Star>
    </PageContainer>
  );
};

export default Main;
