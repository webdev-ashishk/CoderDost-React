import React from "react";
import useCounter from "./useCounter";

const Z100 = () => {
  const { count, increment, decrement } = useCounter(100);
  return (
    <div className="z100">
      <h3>z100.jsx</h3>
      <h5>counter: {count}</h5>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Z100;
