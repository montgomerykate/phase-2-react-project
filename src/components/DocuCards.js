import React from "react";

function DocuCards() {
    const { id, title, comment, rating, where, image } = docsInfo;

    function renderInfo() {
      fetch(`http://localhost:3001/natureDocs/`)
        .then(res => res.json())
        .then(info => loadInfo(info));
    }

  return (
    <div className="card">
      <h2>{""}</h2>
      <img
        src={""}
        alt={""}
        className=""
      />
      <p>{""} Likes </p>
      <button className="like-btn"></button>
      <button className="del-btn"></button>
    </div>
  );
  }



export default DocuCards;