import "./App.css";
import SpecialAssignment from "./Assignment/specialAssignment";
function Anju({ branch, location }) {
  return (
    <>
      <div className="anju">
        <h2>I am Anju</h2>
        <h3>my Branch is: {branch}</h3>
        <h3>my Location is: {location}</h3>
      </div>
    </>
  );
}
//JSX Spread syntax !
function Deepika({ ...props }) {
  return (
    <div className="deepika">
      <h2>I am Deepika</h2>
      <h3>my branch is - {props.branch}</h3>
      <h3>my location is - {props.location}</h3>
    </div>
  );
}
function FirstChildComponent() {
  return (
    <div>
      <h2>I am child component</h2>
    </div>
  );
}
function SecondChildComponent() {
  return (
    <div>
      <h2>I am child component</h2>
    </div>
  );
}
function App() {
  return (
    <>
      <h1>Learing Props</h1>
      <Deepika branch="cse" location="lucknow" />
      <Anju branch="cse" location="gorakhpure" />
      <h1>Special assignment!</h1>
      <SpecialAssignment>
        {/* // props.children accept by SpecialAssignment.jsx  
        1. Here we can Write Component,expresstion,some text
        */}
        <h2>This is normal text!</h2>
        <h3>this is expression: {100 + 200}</h3>
        <FirstChildComponent />
        <SecondChildComponent />
      </SpecialAssignment>
      <SpecialAssignment>
        <h2>This is second special-assignment!!!!</h2>
      </SpecialAssignment>
    </>
  );
}

export default App;
