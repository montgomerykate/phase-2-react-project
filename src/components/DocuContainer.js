import React from "react";
import DocuCards from "./DocuCards";

function DocuContainer({ natureDocs, onRemoveListing }) {
  return (
    <main>
      <ul className="cards">
        {natureDocs.map((docInfo) => (
          <DocuCards
            key={docInfo.id}
            docInfo={docInfo}
            onRemoveListing={onRemoveListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default DocuContainer;