import { useIrisTracking } from "@/lib/utils/useIrisTracking";
import React, { useState } from "react";
const Eye: React.FC = () => {
    const irisPosition = useIrisTracking();

    
    return (
        <>
        <img alt="Moving Iris For Animated Banner" width="200" height="200" className="IrisImg" src={"/images/eyeIris.webp"}  
            style={{
            transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)`
            }}/>
        </>
    );
};

export default Eye;