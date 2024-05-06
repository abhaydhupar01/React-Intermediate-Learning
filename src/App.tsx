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
import LoginProvider from "./state-management/LoginProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <LoginProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </LoginProvider>
  );
}

export default App;
