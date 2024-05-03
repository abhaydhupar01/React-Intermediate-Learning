import { useContext, useReducer, useState } from "react";
import taskReducer from "./reducers/tasksReducer";
import TasksContext from "./contexts/tasksContext";
import LoginContext from "./contexts/loginContext";

interface Task {
  id: number;
  title: string;
}

const TaskList = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const { tasks, dispatch } = useContext(TasksContext);
  const { user } = useContext(LoginContext);
  console.log(user);
  return (
    <>
      <h1>{user && `Tasks for ${user}`} </h1>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
