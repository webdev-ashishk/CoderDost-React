import "./App.css";
import Counter from "./Assignment/counter";
import Toggle from "./Assignment/Toggle";
import ObjectInsideuseState from "./Assignment/ObjectInsideuseState";
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Learing useState Hook</h1>
      <hr />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <ObjectInsideuseState />
    </>
  );
}

export default App;
