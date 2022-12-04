import React from "react";
import styled from "styled-components";

const Form = ({
  width = "100%",
  children,
  align,
  justify,
  direction,
  display,
  bgColor,
  color,
  border,
  radius,
  opacity,
  shadow,
  ta,
}) => {
  const styles = {
    width,
    align,
    justify,
    direction,
    display,
    bgColor,
    color,
    border,
    radius,
    shadow,
    opacity,
    ta,
  };
  return <StForm {...styles}>{children}</StForm>;
};

Form.defaultProps = {
  width: "100%",
  display: "flex",
  align: "center",
  justify: "center",
  direction: "row",
  bgColor: "white",
  color: "black",
  border: "none",
  radius: "0px",
  shadow: "none",
  opacity: 1,
  ta: "center",
};
const StForm = styled.form`
  width: ${({ width }) => width};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: ${({ border }) => border}};
  opacity: ${({ opacity }) => opacity};
  border-radius: ${({ radius }) => radius};
  box-shadow: ${({ shadow }) => shadow};
  text-align: ${({ ta }) => ta};
  
`;

export default Form;
