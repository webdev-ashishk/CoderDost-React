import { useState } from "react";
function Input() {
  const [name, setName] = useState("");

  return (
    <>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter You name"
          />
        </label>
        <button type="submit">Submit</button>
        <hr />
        <h3>Name is: {name}</h3>
      </form>
    </>
  );
}
export default Input;
