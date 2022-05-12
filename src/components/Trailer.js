import React from "react";
import { useRouteMatch } from "react-router-dom";

const Trailer = (props) => {
    const match = useRouteMatch(); // allows you to access the rounterProps match obj, which hold the slug / dynamic varibale from the url

    const embedId = match.params.embedId
    
    return (
    <div className="video-responsive">
        <h1>MovieTrailer-- embedId{embedId}</h1> {/* placeholder */}
        {/* 
        i frame problematic needs work 
        
        */}
    </div>
    )
};

export default Trailer;