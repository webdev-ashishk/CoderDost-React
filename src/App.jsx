import "./App.css";
import TextArea from "./Assignment/TextArea";
import Select from "./Assignment/Select";
import Input from "./Assignment/Input";
import EventObject from "./Assignment/EventObject";
import Child from "./Assignment/Child";
import Parent from "./Assignment/LiftingStateUp/Parent";
function App() {
  function getData(data) {
    console.log(data);
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Chapter-6[Forms]</h1>
      <hr />
      <h2>TextArea</h2>
      <TextArea />
      <hr />
      <Select />
      <hr />
      <h2>Input box</h2>
      <Input />
      <hr />
      <EventObject />
      <hr />
      <Child getData={getData} />
      <hr />
      <Parent />
    </>
  );
}

export default App;
