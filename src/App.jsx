import A from "./Components/A";
import B from "./Components/B";
import Product from "./Components/Product";
function App() {
  return (
    <>
      <h3>data fetching from A component!!</h3>
      <A />
      <h2>Fetched data from B components!!</h2>
      <B></B>
      <h2>Fetched data from Product componett !!!</h2>
      <Product></Product>
    </>
  );
}

export default App;
