import React from "react";
import styled from "styled-components";

const Card = ({
  width,
  children,
  align,
  justify,
  direction,
  display,
  bgColor,
  padding,
  color,
  border,
  radius,
  opacity,
  margin,
  shadow,
  height,
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
    margin,
    padding,
    height,
  };
  return <StCard {...styles}>{children}</StCard>;
};

Card.defaultProps = {
  width: "100%",
  height: "100%",
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
  margin: "0 auto",
};
const StCard = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: ${({ border }) => border}};
  padding: ${({ padding }) => padding};
  opacity: ${({ opacity }) => opacity};
  border-radius: ${({ radius }) => radius};
  box-shadow: ${({ shadow }) => shadow};
  margin: ${({ margin }) => margin};
`;

export default Card;