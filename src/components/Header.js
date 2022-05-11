import React from "react";
import Search from "./Search";

function Header({ onSearch }) {
  return (
    <header>
      <h1>
        NatureTube
      </h1>
      <Search onSearch={onSearch} />
      <nav><></></nav>
    </header>
  );
}

export default Header;