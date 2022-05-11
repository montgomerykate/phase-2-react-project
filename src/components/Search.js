import React from "react";

function Search({ search, handleSearch }) {


  return (
    <div className="searchbar">
    <label htmlFor="search">Search Library:</label>
    <input
      type="text"
      id="search"
      placeholder="Type a name to search..."
      onChange={e => handleSearch(e)}
      value={search}
    />
  </div>
  );
}

export default Search;