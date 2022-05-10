import React, { useState } from "react";

function DocuCards() {
    const { id, title, comment, rating, where, image } = DocuInfo;

   

  return (
    <div className="card">
      <h2>{title}</h2>
      <img
        src={image}
        alt={title}
        className=""
      />
      <p>Rating: {rating} </p>
      <p>Where to find it: {where}</p>
      <p>Description: {comment} </p>
      <button className="like-btn"></button>
    </div>
  );
  }



export default DocuCards;