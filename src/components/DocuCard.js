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
        <strong><b>{docInfo.title}</b></strong>
        <p><b>Rating:</b> {docInfo.rating}</p>
        <p><b>Where to watch:</b> {docInfo.where}</p>
        <p><b>About:</b> {docInfo.comment}</p>
      </div>
    </li>
  );
}
export default DocuCard;