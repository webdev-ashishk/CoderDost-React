import React from "react";
import { useState } from "react";
const ObjectInsideuseState = () => {
  const [object, setObject] = useState({ name: "AshishK", branch: "cs" });
  function handleAddObject() {
    setObject({ ...object, location: "MYO", job: "MERN Stack" });
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Object inside useState</h1>
      <div className="renderObject">
        <div>
          <h2>Object Name: {object.name}</h2>
        </div>
        <div>
          <h2>Object Branch: {object.branch}</h2>
        </div>
        <div>
          <h2>Object Location: {object.location}</h2>
        </div>
        <div>
          <h2>Object Job: {object.job}</h2>
        </div>
      </div>
      <button onClick={handleAddObject}>Add-new-object</button>
    </>
  );
};

export default ObjectInsideuseState;
