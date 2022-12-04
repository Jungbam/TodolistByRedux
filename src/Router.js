import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import FooterCon from "./component/styleModule/FooterCon";
import Error404 from "./pages/Error404/Error404";
import Main from "./pages/Main/Main";
import Todo from "./pages/Todo/Todo";
import TodoDetail from "./pages/TodoDetail/TodoDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/about/:page" element={<TodoDetail />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
      <FooterCon bgColor="#999" />
    </BrowserRouter>
  );
};

export default Router;
