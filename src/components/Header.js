// import React from "react";

// function header() {
//   return (
//     <header>
//       <h1>Nature Docs to Appreciate the World</h1>
//     </header>
//   );
// }

// export default header;

import React from "react";
import Search from "./Search";

function Header({ onSearch }) {
  return (
    <header>
      <h1>
        NatureTube
      </h1>
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;