import React from "react";
import { useState } from "react";
const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>toggle-assignment by thapa</h1>
      {toggle ? (
        <ul className="list-group">
          <li className="list-group-item">Before Toggle</li>
        </ul>
      ) : (
        <>
          <ul>
            <li>After toggle</li>
          </ul>
        </>
      )}
      <button onClick={handleToggle}>toggle upper text</button>
    </>
  );
};

export default Toggle;
