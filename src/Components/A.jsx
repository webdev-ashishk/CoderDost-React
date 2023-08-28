import React from "react";
import useCounter from "./useCounter";

const A = () => {
  const { count, increment, decrement } = useCounter(10);
  return (
    <div className="a">
      <p>this is A componet</p>
      <h3>useCounter</h3>
      <h3>count: {count}</h3>
      <button onClick={increment}>IncrementByOne</button>
      <button onClick={decrement}>IncrementByOne</button>
    </div>
  );
};

export default A;
