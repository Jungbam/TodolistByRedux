import React from "react";
import styled from "styled-components";

const Button = ({
  onClick,
  bgColor,
  color,
  radius,
  opacity,
  children,
  width,
  height,
  hover,
  shadow,
  border,
  margin,
}) => {
  const styles = {
    hover,
    bgColor,
    color,
    shadow,
    radius,
    opacity,
    width,
    height,
    children,
    border,
    margin,
  };
  return (
    <StBtn {...styles} onClick={onClick}>
      {children}
    </StBtn>
  );
};
// props 정리, props의 타입모듈.
Button.defaultProps = {
  bgColor: "none",
  color: "black",
  radius: "0px",
  opacity: 1,
  onclick: () => {},
  shadow: "none",
  border: "1px solid black",
  margin: "0 auto", // 버튼에서?
};
const StBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  opacity: ${({ opacity }) => opacity};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ shadow }) => shadow};
  border: ${({ border }) => border};
  margin: ${({ margin }) => margin};
  cursor: pointer;
  padding: 3px;
  &:hover {
    outline: none;
    opacity: 0.8;
  }
`;

export default Button;
