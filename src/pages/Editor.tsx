import React, { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { increment, decrement } from "@/store/counterSlice";

const App: React.FC = props => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  let params = useParams();
  useEffect(() => {
    console.log("useEffect...", params);
  }, []);
  console.log("Template.props", props);
  return (
    <div className="App">
      Editor{" "}
      <div>
        <p>{count}</p>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
