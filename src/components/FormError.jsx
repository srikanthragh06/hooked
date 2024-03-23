import React from "react";

const FormError = ({ children, className }) => {
    return <p className={`text-red-600 ${className}`}>{children}</p>;
};

export default FormError;
