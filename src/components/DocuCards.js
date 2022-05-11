import React, { useState } from "react";

function DocuCard({
  docInfo: { id, image, title, comment, where },
  onRemoveListing,
}) {
  const [favorite, setFavorite] = useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:3001/listings/${id}`, {
      method: "DELETE",
    });
    onRemoveDocInfo(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{title}</strong>
        <span>Where to watch: {where}</span>
        <span>About: {comment}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default DocuCard;