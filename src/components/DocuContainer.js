import React, { useState, useEffect } from "react";
import search from "../src/search";


function DocuContainer() {
const [docuArr, setDocuArr] = useState([]);
useEffect(() => {
    fetch("http://localhost:3001/natureDocs")
    .then(res => res.json())
    .then(setDocuArr)
}, [])



    return (
        <main>
            <MyList docuArr = {docuArr} />
            <Search />
        </main>
    );
}






export default DocuContainer;