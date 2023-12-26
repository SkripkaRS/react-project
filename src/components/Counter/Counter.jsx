import React from "react";
import { useState } from "react";
import Styles from "./Styles.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecreament = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCount((prevState) => (prevState = 0));
  };

  return (
    <div>
      <p>
        <span>Count: {count}</span>
      </p>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
