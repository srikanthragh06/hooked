export const validateEmail = (email, optional = false) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!optional && !email) return "Missing Email Address";

    if (!pattern.test(email)) {
        return "Invalid email format. Please enter a valid email address.";
    } else {
        return null;
    }
};

export const validatePassword = (password, optional = false) => {
    if (!optional && !password) return "Missing password";

    if (!(password.length >= 8 && password.length <= 32)) {
        return "Password must be between 8 and 32 characters long.";
    } else {
        return null;
    }
};
