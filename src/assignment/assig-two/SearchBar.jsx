const SearchBar = () => {
  const names = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "sixteen",
    "eighteen",
    "eighteen",
    "nineteen",
    "twenty",
    "twentyOne",
    "twentyTwo",
    "twentyThree",
    "twentyFour",
    "twentyFive",
    "twentySix",
    "twentySeven",
  ];
  function handleSearch() {
    // alert("search..");
    // e.preventDefault();
    const search = document.getElementById("search");

    const target = search.value;
    const indexOfElement = names.indexOf(target);
    if (!indexOfElement) {
      return (
        <>
          <h3>not found!!!</h3>
        </>
      );
    }
    return (
      <>
        <div>
          <ul>
            <li>{indexOfElement}</li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <>
      <input type="search" onChange={handleSearch} id="search" />
      {names.map((nm, index) => {
        return (
          <div key={index} style={{ color: "green" }}>
            <ul>
              <li>{nm}</li>
            </ul>
          </div>
        );
      })}
      console.log(SearchBar);
    </>
  );
};

export default SearchBar;
