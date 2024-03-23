import { forwardRef } from "react";

const FormInput = forwardRef(
    ({ type = "text", placeholder = "Type here...", className }, ref) => {
        return (
            <input
                type={type}
                placeholder={placeholder}
                ref={ref}
                className={`text-lg outline-none 
                    md:w-1/2 w-5/6 px-2 py-1
                    bg-black placeholder-yellow-600
                     rounded-md border-2 border-yellow-600 
                     ${className}`}
            />
        );
    }
);

export default FormInput;
