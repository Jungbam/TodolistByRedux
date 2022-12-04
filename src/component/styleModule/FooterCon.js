import React from "react";
import styled from "styled-components";

const FooterCon = ({ bgColor = "inherit", height = "100px" }) => {
  const styles = { bgColor, height };
  return (
    <StFooter {...styles}>
      <p>Copyright &copy; Jungbam in HanagHae 2022</p>
    </StFooter>
  );
};

export default FooterCon;

const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(30, 30, 30);
  margin: 0;
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
`;
