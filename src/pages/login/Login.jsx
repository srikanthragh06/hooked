import React from "react";
import LoginHeader from "./LoginHeader";
import BackgroundImage from "../../components/BackgroundImage";
import MainPage from "../../components/MainPage";
// import witcherbg from

const Login = () => {
    return (
        <MainPage backgroundImageURL={"/lastofusbg.jpg"}>
            <LoginHeader />
        </MainPage>
    );
};

export default Login;
