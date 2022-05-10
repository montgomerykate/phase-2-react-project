import React from "react";
import Header from "./header";


function App() {
    return (
      <>
        <Header />
        <div className="buttonContainer">
          <button></button>
        </div>
      </>
    );
  }
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


export default App;