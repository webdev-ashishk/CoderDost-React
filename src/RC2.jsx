import React, { useContext } from "react";
import MyContext from "./MyContext";

function RC2() {
  const { text, setText } = useContext(MyContext);
  function handleClick() {
    return setText("this is text from handle click!");
  }
  return (
    <>
      <i> random component two !</i>
      <br />
      <b>text will change: {text}</b>
      <br />
      <button onClick={handleClick}>change the text</button>
    </>
  );
}

export default RC2;
