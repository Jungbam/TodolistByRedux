import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";
import Main from "./pages/Main/Main";
import { todoStore } from "./pages/Todo/redux/configue/todostore";
import Todo from "./pages/Todo/Todo";
import TodoDetail from "./pages/TodoDetail/TodoDetail";

function App() {
  return (
    <Provider store={todoStore}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/about/:page" element={<TodoDetail />}></Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
