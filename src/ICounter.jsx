import React, { useContext } from "react";
import { MyContext } from "./App";

const ICounter = () => {
  const { setCount } = useContext(MyContext);
  function handleIncrement() {
    setCount((previous) => previous + 1);
  }
  return (
    <>
      <button onClick={handleIncrement}>increase</button>
    </>
  );
};

export default ICounter;
