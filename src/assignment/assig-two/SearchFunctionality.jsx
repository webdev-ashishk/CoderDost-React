// App.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const dataArray = [
    "apple",
    "banana",
    "orange",
    "cat",
    "dog",
    "fish",
    "red",
    "blue",
    "green",
  ];

  const handleSearch = (searchTerm) => {
    const matchingItems = dataArray.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(matchingItems);
  };

  return (
    <div>
      <h1>Search Bar App</h1>
      <SearchBar data={dataArray} onSearch={handleSearch} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
