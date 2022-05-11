import React from "react";

const YoutubeImbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe 
        width="853"
        height="480"
        src={`http://localhost:3001/natureDocs/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </div>
);

export default Trailers;