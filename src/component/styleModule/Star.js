// 작업중

import React from "react";
import styled from "styled-components";

const Star = ({
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
  return <StStar {...styles}>{children}</StStar>;
};

Star.defaultProps = {
  width: "100%",
  height: "100%",
  display: "flex",
  align: "center",
  justify: "center",
  direction: "row",
  bgColor: "none",
  color: "black",
  border: "none",
  radius: "0px",
  shadow: "none",
  opacity: 1,
  margin: "0 auto",
};
const StStar = styled.div`
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
  box-shadow:0 0 20px  white,
          4px 4px 10px 10px yellow,
          inset 0 0 14px 0 white,
          inset -40px -30px 70px 0 grey,
          inset -40px -30px 100px 0 cyan,
          inset -40px -30px 140px 0 powderblue;
  margin: ${({ margin }) => margin};
  `;

export default Star;
