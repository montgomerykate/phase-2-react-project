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

  // const displayedListings = listings.filter((listing) => {
  //  return listing.description.toLowerCase().includes(search.toLowerCase())}
  // );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <DocuContainer
        natureDocs={listings}
      />
    </div>
  );
}

export default App;