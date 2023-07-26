import React from "react";
import { useContext } from "react";
import MyContext from "./MyContext";
const RandomComponent = () => {
  const { text, setText } = useContext(MyContext);
  return (
    <>
      <p>randomeComponent.jsx </p>
      <h4>text will change: {text}</h4>
      <button onClick={() => setText("text from randomeCompoenent!")}>
        click me
      </button>
    </>
  );
};

export default RandomComponent;
