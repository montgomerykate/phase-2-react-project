import React, { useEffect, useState } from "react";
import Header from "./Header";
import DocuContainer from "./DocuContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/natureDocs")
      .then(r => r.json())
      .then(data => setListings(data))
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

   const displayedListings = listings.filter(listing => listing.title.toLowerCase().includes(search.toLowerCase())
   );

  return (
    <div className="app">
      <Header search={search} handleSearch={handleSearch} />
      <DocuContainer
        natureDocs={displayedListings}
      />
    </div>
  );
}

export default App;