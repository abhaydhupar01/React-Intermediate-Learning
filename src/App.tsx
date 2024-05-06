import "./App.css";
import HomePage from "./routing/HomePage";
import Counter from "./state-management/counter/Counter";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <TasksProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TasksProvider>
  );
}

export default App;
