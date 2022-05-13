import React from "react";
import { useRouteMatch } from "react-router-dom";

const Trailer = () => {
    const match = useRouteMatch();
    const embedId = match.params.embedId
    
    return (
    <div className="video-responsive">
        <iframe 
        width="560" 
        height="315" 
        src= {`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
    </div>
    )


};

export default Trailer;