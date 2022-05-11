// import React, {useEffect, useState} from "react";
// import DocuContainer from "./DocuContainer";
// import Header from "./header";


// function App() {
//   const [docs, setDocs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/natureDocs")
//       .then((r) => r.json())
//       .then(setDocs);
//   }, []);

//   return (
//     <div className="app">
//       <Header />
//       <DocuContainer docs={docs} />
//     </div>
//   );
// }









// function App() {
//     const [docuArr, setDocuArr] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:3001/natureDocs")
//         .then(res => res.json())
//         .then(setDocuArr)
//     }, [])

//     return (
//         <div className="app">
//         <Header />
//         <DocuContainer docuArr={docuArr} />
//         </div>
//     );
//     }
  // function NavBar() {
  //   function navigate(e) {
  //     e.preventDefault();
  //     window.history.pushState(null, "", e.target.href);
  //   }
  
  //   return (
  //     <nav>
  //       <a href="/documentaries" onClick={navigate}>
  //         Documentaries
  //       </a>
  //       <a href="/charity" onClick={navigate}>
  //         Charity
  //       </a>
  //       <a href="/login" onClick={navigate}>
  //         Login
  //       </a>
  //     </nav>
  //   );
  // }


// export default App;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./DocuContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListings);
  }, []);

  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }

  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer
        listings={displayedListings}
        onRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;