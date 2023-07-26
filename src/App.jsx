import { useState } from "react";
import MyContext from "./MyContext";
import RandomComponent from "./RandomComponent";
import RC2 from "./RC2";
function App() {
  const [text, setText] = useState(" this is app.jsx file ");
  return (
    <>
      <h3>app-rendered!@ app.jsx</h3>
      {/* //value is global data  */}
      <MyContext.Provider value={{ text, setText }}>
        <RandomComponent />
        <hr />
        <RC2></RC2>
      </MyContext.Provider>
    </>
  );
}

export default App;
