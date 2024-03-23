import React from "react";
import LoginHeader from "./LoginHeader";
import MainPage from "../../components/MainPage";
import SigninForm from "./SigninForm";

const Login = () => {
    return (
        <MainPage className="flex flex-col items-center md:space-y-14 space-y-8">
            <LoginHeader />
            <SigninForm />
            <h1 className="md:block hidden text-2xl text-yellow-600 font-bold w-1/2 text-center">
                Get hooked with{" "}
                <span className="bungee-shade-regular">HOOKED</span> and relish
                unlimited movies, TV shows and more!
            </h1>
        </MainPage>
    );
};

export default Login;
