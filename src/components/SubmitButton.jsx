const SubmitButton = ({ children, className }) => {
    return (
        <button
            className={`bg-yellow-600 text-black rounded-sm
                        px-3 py-1 font-bold text-lg 
                        cursor-pointer hover:opacity-60 transition ${className}`}
        >
            {children}
        </button>
    );
};

export default SubmitButton;
