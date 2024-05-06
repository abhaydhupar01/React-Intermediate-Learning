import "./App.css";
import HomePage from "./routing/HomePage";
import LoginProvider from "./state-management/auth/LoginProvider";
import Counter from "./state-management/counter/Counter";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <LoginProvider>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </LoginProvider>
  );
}

export default App;
