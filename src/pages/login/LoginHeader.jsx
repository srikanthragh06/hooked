import React from "react";
import HookedLogo from "../../components/HookedLogo";

const LoginHeader = () => {
    return (
        <div
            className="border-white border-
                        flex justify-center
                        py-3 px-2"
        >
            <HookedLogo className={"md:text-6xl text-5xl "} />
        </div>
    );
};

export default LoginHeader;
