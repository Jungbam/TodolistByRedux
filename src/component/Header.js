import React from "react";
import { NavLink } from "react-router-dom";
import { Li, Title, Wrapper } from "./styleModule/styleIndex";

const Header = () => {
  return (
    <Wrapper bgColor="#999" justify="space-between" padding="5px">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Title color="white" fw={6000}>
          Second Todo
        </Title>
      </NavLink>
      <Wrapper width="300px" justify="space-around" margin="0 15px">
        <NavLink to="/todo" style={{ textDecoration: "none" }}>
          <Li>TodoList</Li>
        </NavLink>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
