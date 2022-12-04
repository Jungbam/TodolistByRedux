import React from "react";
import styled from "styled-components";

const Title = ({
  fs,
  children,
  bgColor,
  color,
  border,
  radius,
  opacity,
  shadow,
  ta,
  fw,
  margin,
  td,
}) => {
  const styles = {
    fs,
    bgColor,
    color,
    border,
    radius,
    shadow,
    opacity,
    ta,
    fw,
    margin,
    td,
  };
  return <StTitle {...styles}>{children}</StTitle>;
};

Title.defaultProps = {
  fs: "24px",
  fw: 600,
  bgColor: "inherit",
  color: "black",
  border: "none",
  radius: "0px",
  shadow: "none",
  opacity: 1,
  ta: "center",
  margin: "0 auto",
  td: "none",
};
const StTitle = styled.h1`
  font-size: ${({ fs }) => fs};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: ${({ border }) => border}};
  opacity: ${({ opacity }) => opacity};
  border-radius: ${({ radius }) => radius};
  box-shadow: ${({ shadow }) => shadow};
  text-align: ${({ ta }) => ta};
  text-decoration: ${({ td }) => td}; 
  margin: ${({ margin }) => margin};
  font-weight: ${({ fw }) => fw};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px rgba(100, 58, 199);
  }
  &:active {
    text-decoration: none; 
  }
`;

export default Title;
