import { useRef, useState } from "react";
import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";
import { validateEmail, validatePassword } from "../../utils/validation";
import FormError from "../../components/FormError";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import HookedText from "../../components/HookedText";

const SigninForm = ({ setSignup }) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [signinError, setSigninError] = useState(null);

    const handleSignin = async (e) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (validateEmail(email)) return setSigninError(validateEmail(email));
        if (validatePassword(password))
            return setSigninError(validatePassword(password));

        try {
            setSigninError(null);
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res);
        } catch (err) {
            const errorCode = err.code.split("/").slice(1)[0];
            setSigninError(errorCode);
        }
    };

    return (
        <div
            className="border-
                py-4 px-2 
                md:w-[550px] w-full
                flex flex-col items-center md:space-y-10 space-y-6
                text-yellow-600"
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
                <p
                    onClick={setSignup}
                    className="hover:underline hover:opacity-85 cursor-pointer"
                >
                    New to <HookedText />
                    ?? Sign up NOW!
                </p>
                <SubmitButton>Sign In</SubmitButton>
            </form>
        </div>
    );
};

export default SigninForm;
