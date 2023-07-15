import React from "react";
import { useState } from "react";
const TextArea = () => {
  const [textarea, setTextarea] = useState(
    "this is placeholder and text area also!"
  );
  function handleChange(event) {
    setTextarea(event.target.value);
  }
  return (
    <>
      <div>TextArea-rendered</div>
      <form>
        <textarea onChange={handleChange} value={textarea} />
      </form>
    </>
  );
};

export default TextArea;
