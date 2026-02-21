import { useIrisTracking } from "@/lib/utils/useIrisTracking";
import React, { useState } from "react";
const Eye: React.FC = () => {
    const irisPosition = useIrisTracking();

    
    return (
        <>
        <img className="IrisImg" src={"/images/eyeIris.webp"}  
            style={{
            transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)`
            }}/>
        </>
    );
};

export default Eye;