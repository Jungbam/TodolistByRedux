import { Provider } from "react-redux";
import "./App.css";
import { todoStore } from "./pages/Todo/redux/configue/todostore";
import Router from "./Router";

function App() {
  return (
    <Provider store={todoStore}>
      <Router />
    </Provider>
  );
}

export default App;
