import { useState } from "react";
import "./Counter.css";
import CounterStates from "./counter-States/CounterStates";

function Counter() {
  const [countVal, setCountVal] = useState(0);

  function increaseCount() {
    setCountVal((e) => e + 1);
  }
  function decreaseCount() {
    setCountVal((e) => e - 1);
  }
  return (
    <div className="counter-wrapper">
      <CounterStates count={countVal} />
      <div className="counters-btn">
        <button onClick={decreaseCount} className="btn">
          -
        </button>
        <button onClick={increaseCount} className="btn">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
