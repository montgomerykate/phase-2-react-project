import React from "react";
import Search from "./Search";
import {Link} from "react-router-dom"

function Header({ search, handleSearch }) {
  return (
    <header>
      <h1>
        NeatureTube
      </h1>
      <Search search={search} handleSearch={handleSearch}/>
      <nav>
        <ul>
          <li>
            <Link to= "/">Home</Link>
            </li>
            
            <li>
            <Link to="/newdocform">Add Documentary</Link>
            </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;