import React from "react";

const Child = (props) => {
  const data = "this is child data!";

  return (
    <>
      <h3>This is child Data!</h3>
      <button onClick={() => props.getData(data)}>This is Child</button>
    </>
  );
};

const Parent = () => {
  function getName(name) {
    console.log(name);
  }
  return (
    <>
      <h3>Parent-rendered!</h3>
      <Child getData={getName} />
    </>
  );
};

export default Parent;
