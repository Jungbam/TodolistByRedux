import React from "react";
import styled from "styled-components";

const Absolute = ({
  width,
  height,
  children,
  justify,
  direction,
  top,
  bottom,
  left,
  right,
}) => {
  const styled = {
    width,
    height,
    justify,
    direction,
    top,
    bottom,
    left,
    right,
  };
  return <StAbsolute {...styled}>{children}</StAbsolute>;
};
Absolute.defaultProps = {
  bgColor: "none",
  color: "black",
  width: "100%",
  height: "100%",
  direction: "row",
  justify: "center",
  top: "none",
  bottome: "none",
  left: "none",
  right: "none",
};
const StAbsolute = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  display: flex;
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottome: ${({ bottome }) => bottome};
  align-items: center;
`;
export default Absolute;
