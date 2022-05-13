import React from "react";
import DocuCard from "./DocuCard";

function DocuContainer({ natureDocs }) {
  return (
    <main>
      <ul className="cards">
        {natureDocs.map((docInfo) => (
          <DocuCard
              embedId={docInfo.embedId}
            key={docInfo.id}
            docInfo={docInfo}
          />
        ))}
      </ul>
    </main>
  );
}

export default DocuContainer;