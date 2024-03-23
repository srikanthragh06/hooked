import { useRef, useState } from "react";
import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";
import { validateEmail, validatePassword } from "../../utils/validation";
import FormError from "../../components/FormError";

const SigninForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [signinError, setSigninError] = useState(null);

    const handleSignin = (e) => {
        e.preventDefault();

        if (validateEmail(emailRef.current?.value))
            return setSigninError(validateEmail(emailRef.current?.value));
        if (validatePassword(passwordRef.current?.value))
            return setSigninError(validatePassword(passwordRef.current?.value));

        setSigninError(null);
    };

    return (
        <div
            className="border-
                py-4 px-2 
                md:w-[550px] w-full
                flex flex-col items-center md:space-y-10 space-y-6
                text-yellow-600  bg-black"
        >
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form
                onSubmit={(e) => handleSignin(e)}
                className="text-yellow-600 w-full h-full
                                flex flex-col items-center space-y-5 border-"
            >
                <FormInput
                    type={"email"}
                    placeholder={"Email Address"}
                    ref={emailRef}
                />
                <FormInput
                    type={"password"}
                    placeholder={"Password"}
                    ref={passwordRef}
                />
                <FormError>{signinError}</FormError>
                <SubmitButton>Sign In</SubmitButton>
            </form>
        </div>
    );
};

export default SigninForm;
