import React, { useState } from "react";
//NOTE:

// useCounter is not a Component
// useCounter is a function
const useCounter = (value) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + value);
  }
  function decrement() {
    setCount(count - value);
  }

  return { count, increment, decrement };
};

export default useCounter;
