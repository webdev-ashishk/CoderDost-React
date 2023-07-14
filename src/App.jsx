import "./App.css";

function App() {
  console.log("app-rendered");
  return (
    <>
      <Game />
      <Wow />
    </>
  );
}
function Game() {
  const prize = 1000;
  return (
    <>
      <div className="hello">
        <h1>play game and win {prize}</h1>
      </div>
    </>
  );
}
function Wow() {
  console.log("wow-rendered");

  return (
    <>
      <div className="wow">
        <h1>wow!!</h1>
      </div>
    </>
  );
}
export default App;
