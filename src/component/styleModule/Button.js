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
  border,
  margin,
}) => {
  const styles = {
    hover,
    bgColor,
    color,
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

Button.defaultProps = {
  bgColor: "white",
  color: "black",
  radius: "0px",
  opacity: 1,
  onclick: () => {},

  border: "1px solid black",
  margin: "0 auto",
};
const StBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  opacity: ${({ opacity }) => opacity};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  &:hover {
    outline: none;
    opacity: 0.8;
  };
  cursor: pointer;
  border: ${({ border }) => border}};
  margin: ${({ margin }) => margin};
  padding : 3px
`;

export default Button;
