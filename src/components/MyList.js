import React from "react";
import DocuCards from "./DocuCards";
import DocuContainer from "./DocuContainer";


function MyList({ natureDocs }) {
    return (
      <ul className="cards">
        {natureDocs.map((docuArr) => {
          return (
            <DocuCard
              key={docuArr.id}
              docuArr={docuArr}
            />
          );
        })}
      </ul>
    );
  }


export default MyList;