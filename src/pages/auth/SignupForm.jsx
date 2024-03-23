import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";
import FormError from "../../components/FormError";
import FormModeChange from "../../components/FormModeChange";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { validateEmail, validatePassword } from "../../utils/validation";
import { auth } from "../../utils/firebase";

const SignupForm = ({ setSignin }) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [signupError, setSignupError] = useState(null);

    const handleSignin = async (e) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;

        if (validateEmail(email)) return setSignupError(validateEmail(email));
        if (validatePassword(password))
            return setSignupError(validatePassword(password));
        if (password !== confirmPassword)
            return setSignupError("Password and Confirm Password do not match");

        try {
            setSignupError(null);
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(res);
        } catch (err) {
            console.log(err);
            const errorCode = err.code.split("/").slice(1)[0];
            setSignupError(errorCode);
        }
    };

    return (
        <div
            className="border-
        py-4 px-2 
        md:w-[550px] w-full
        flex flex-col items-center 
        md:space-y-10 space-y-6
        text-yellow-600"
        >
            <h1 className="text-3xl font-bold">Create Account</h1>
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
                <FormInput
                    type={"password"}
                    placeholder={"Confirm Password"}
                    ref={confirmPasswordRef}
                />
                <FormError>{signupError}</FormError>
                <FormModeChange onClick={setSignin}>
                    Already have an account?? Sign in then!
                </FormModeChange>
                <SubmitButton>Sign up</SubmitButton>
            </form>
        </div>
    );
};

export default SignupForm;
