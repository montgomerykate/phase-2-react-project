import React, { useEffect, useState } from "react";
import Header from "./Header";
import DocuContainer from "./DocuContainer";
import {Route, Switch, Link} from "react-router-dom"
import Trailer from "./Trailer"
import NewDocForm from "./NewDocForm";

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

  const addNewDoc = (newDoc) => {
    setListings([...listings, newDoc])
  }

   const displayedListings = listings.filter(listing => listing.title.toLowerCase().includes(search.toLowerCase())
   );

  return (
    <>
    <Header search={search} handleSearch={handleSearch} />
    <Switch>
    <div className="app">
    <Route path='/newdocform'>
      <NewDocForm addNewDoc={addNewDoc}/>
    </Route>
      
      <Route exact path="/">
      <DocuContainer
        natureDocs={displayedListings}
      />
      </Route>

      <Route  path='/youtube/:embedId'> 
      <Trailer />
      </Route>
      
    
    </div>
    </Switch>
    </>
  );
}

export default App;