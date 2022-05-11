import React from "react";
import DocuCards from "./DocuCards";

function DocuContainer({ natureDocs }) {
  return (
    <main>
      <ul className="cards">
        {natureDocs.map((docInfo) => (
          <DocuCards
            key={docInfo.id}
            docInfo={docInfo}
          />
        ))}
      </ul>
    </main>
  );
}

export default DocuContainer;