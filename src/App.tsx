import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import loginReducer from "./state-management/reducers/loginReducer";
import LoginContext from "./state-management/contexts/loginContext";

function App() {
  const [user, dispatchUser] = useReducer(loginReducer, "");
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <LoginContext.Provider value={{ user, dispatchUser }}>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
