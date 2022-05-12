import React, { useState } from "react";
import {Link} from "react-router-dom"

function DocuCard({ docInfo, embedId }
) {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <Link to={`/youtube/${embedId}`}>
        <img src={docInfo.image} alt={docInfo.comment} />
        </Link>
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
        <strong>{docInfo.title}</strong>
        <p>Rating: {docInfo.rating}</p>
        <p>Where to watch: {docInfo.where}</p>
        <p>About: {docInfo.comment}</p>
      </div>
    </li>
  );
}
export default DocuCard;