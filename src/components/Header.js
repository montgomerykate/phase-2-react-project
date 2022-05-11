import React from "react";
import Search from "./Search";

function Header({ search, handleSearch }) {
  return (
    <header>
      <h1>
        NatureTube
      </h1>
      <Search search={search} handleSearch={handleSearch}/>
    </header>
  );
}

export default Header;