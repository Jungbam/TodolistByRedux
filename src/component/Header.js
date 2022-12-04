import React from "react";
import { NavLink } from "react-router-dom";
import { Title, Wrapper } from "./styleModule/styleIndex";

const Header = () => {
  return (
    <Wrapper bgColor={"#999"} justify="space-between" padding={"5px"}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Title color={"white"} fw={6000}>
          Second Todo
        </Title>
      </NavLink>
      <Wrapper width="300px" justify={"space-around"} margin={"0 15px"}>
        <NavLink to="/todo" style={{ textDecoration: "none" }}>
          <li>TodoList</li>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </NavLink>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
