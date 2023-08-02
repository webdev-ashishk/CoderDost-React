import React, { createContext, useState } from "react";
import { DCounter } from "./DCounter ";
import ICounter from "./ICounter";
export const MyContext = createContext("");
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>count value : {count}</h2>
      <MyContext.Provider value={{ setCount }}>
        <ICounter />
        <DCounter />
      </MyContext.Provider>
    </>
  );
};

export default App;
