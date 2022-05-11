import React, { useEffect, useState } from "react";
import Header from "./Header";
import DocuContainer from "./DocuContainer";
import {Route, Switch} from "react-router-dom"

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
  
   <Switch>
    <Route exact path= "/listings">
    <DocuContainer natureDocs={listings} />
    </Route>
    
    </Switch>
   

  </div> 
  
   
  
    
  );
}

export default App;