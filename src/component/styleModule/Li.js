import React from "react";
import styled from "styled-components";

const Li = ({ bgColor, color, children }) => {
  const styles = { bgColor, color };
  return <StLi {...styles}> {children}</StLi>;
};
export default Li;

Li.defaultProps = {
  color: "white",
  bgColor: "inherit",
};

const StLi = styled.li`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  list-style: none;
  margin-left: 5px;
`;
