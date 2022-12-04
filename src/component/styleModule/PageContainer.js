import React from "react";
import styled from "styled-components";

const PageContainer = ({
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
  };
  return <StPageContainer {...styles}>{children}</StPageContainer>;
};

export default PageContainer;
PageContainer.defaultProps = {
  width: "100%",
  height: "100%",
  display: "flex",
  align: "center",
  justify: "center",
  bgColor: "inherit",
  border: "none",
  direction: "row",
  margin: "0 auto",
  padding: 0,
};
const StPageContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height : 100vh;
  background-color: ${({ bgColor }) => bgColor};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border}};
`;
