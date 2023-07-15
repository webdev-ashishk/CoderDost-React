import React, { useState } from "react";

const Child = ({ getData }) => {
  const [name, setName] = useState("");
  function handleName(e) {
    // e.preventdefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getData(name);
  }
  return (
    <>
      <h2>learing lifting state up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleName} />
        <button type="submit">call on submit</button>
      </form>
    </>
  );
};

export default Child;
