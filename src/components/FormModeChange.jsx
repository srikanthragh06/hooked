import React from "react";

const FormModeChange = ({ children, onClick }) => {
    return (
        <p
            onClick={onClick}
            className="hover:underline hover:opacity-85 transition cursor-pointer"
        >
            {children}
        </p>
    );
};

export default FormModeChange;
