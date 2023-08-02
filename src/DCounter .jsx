import React, { useContext } from "react";
import { MyContext } from "./App";

export const DCounter = () => {
  const { setCount } = useContext(MyContext);
  function handleDecrement() {
    setCount((previousCount) => previousCount - 1);
  }
  return (
    <>
      &nbsp;
      <button onClick={handleDecrement}>decrease</button>
    </>
  );
};
