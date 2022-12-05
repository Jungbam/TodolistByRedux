import React from "react";
import styled from "styled-components";

const Wrapper = ({
  width,
  children,
  align,
  justify,
  direction,
  display,
  bgColor,
  margin,
  padding,
  border,
  height,
  wrap,
  shadow,
  position,
}) => {
  const styles = {
    padding,
    bgColor,
    margin,
    width,
    align,
    justify,
    direction,
    display,
    border,
    height,
    wrap,
    shadow,
    position,
  };
  return <StWrapper {...styles}>{children}</StWrapper>;
};

export default Wrapper;
Wrapper.defaultProps = {
  width: "100%",
  display: "flex",
  align: "center",
  justify: "center",
  bgColor: "inherit",
  border: "none",
  direction: "row",
  margin: "0 auto",
  padding: 0,
  height: "100%",
  wrap: "wrap",
  shadow: "none",
  position: "",
};
const StWrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border}};
  box-shadow: ${({ shadow }) => shadow}};
  position: ${({ position }) => position};
  flex-wrap :wrap;
  overflow:auto;
`;
// styled-normalize
// GlobalStyled.js => 전역 스타일 부여
