import React, { useState } from "react";

const ToDoApp = () => {
  let userArray = ["AshishK", "Anju", "Deepika"];
  const [users, setUsers] = useState(userArray);

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Todo Application</h1>
      <input type="text" style={{ margin: "10px" }} />
      <button>add todo</button>
      {users.map((user, i) => {
        return (
          <>
            <li key={i}>{user}</li>
          </>
        );
      })}
    </>
  );
};

export default ToDoApp;
