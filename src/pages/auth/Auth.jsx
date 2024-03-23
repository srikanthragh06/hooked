import React, { useEffect, useState } from "react";
import MainPage from "../../components/MainPage";
import SigninForm from "./SigninForm";
import HookedText from "../../components/HookedText";
import AuthHeader from "./AuthHeader";
import SignupForm from "./SignupForm";

const Auth = () => {
    const [isSignin, setIsSignin] = useState(true);

    return (
        <MainPage className="items-center md:space-y-14 space-y-8">
            <AuthHeader />

            <h1 className="md:block hidden text-2xl text-yellow-600 font-bold w-1/2 text-center">
                Get hooked with <HookedText /> and relish unlimited movies, TV
                shows and more!
            </h1>
            {isSignin ? (
                <SigninForm setSignup={() => setIsSignin(false)} />
            ) : (
                <SignupForm setSignin={() => setIsSignin(true)} />
            )}
        </MainPage>
    );
};

export default Auth;
