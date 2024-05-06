import { useReducer } from "react";
import useCounterStore from "./store";
import { mountStoreDevtool } from "simple-zustand-devtools";

const Counter = () => {
  // const [value, setValue] = useState(0);
  const { counter, increment, reset } = useCounterStore();
  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default Counter;
