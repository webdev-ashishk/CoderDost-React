import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  function handleI() {
    setCounter((counter) => counter + 1);
  }
  function handleD() {
    setCounter((counter) => counter - 1);
  }
  return (
    <>
      <h2>This is counter value!{counter}</h2>
      <button onClick={handleI}>Increment-counter-value</button>
      <button style={{ margin: "10px" }} onClick={handleD}>
        Decrement-counter-value
      </button>
    </>
  );
};

export default Counter;
