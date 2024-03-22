import React from "react";
import BackgroundImage from "./BackgroundImage";

const MainPage = ({ className, children, backgroundImageURL = null }) => {
    return (
        <div
            className={`
             w-full h-full
            background-images
            ${className}`}
        >
            {backgroundImageURL && (
                <BackgroundImage imageUrl={backgroundImageURL} />
            )}
            {children}
        </div>
    );
};

export default MainPage;
