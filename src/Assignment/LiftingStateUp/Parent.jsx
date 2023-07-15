import React from "react";
//sending data from child!
const Child = ({ recieveInChild }) => {
  const sendData = "this is child data!";

  return (
    <>
      <h3>This is child Data!</h3>
      <button onClick={() => recieveInChild(sendData)}>This is Child</button>
    </>
  );
};
// receive data from parent !
const Parent = () => {
  function recieveInParent(recieveData) {
    console.log(recieveData);
  }
  return (
    <>
      <h3>Parent-rendered!</h3>
      <Child recieveInChild={recieveInParent} />
    </>
  );
};

export default Parent;
