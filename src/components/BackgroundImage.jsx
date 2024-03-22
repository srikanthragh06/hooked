const BackgroundImage = ({ imageUrl }) => {
    return (
        <img
            className="fixed inset-0
                                 opacity-45 z[-10] 
                                bg-gradient-to-b from-black"
            src={imageUrl}
        />
    );
};

export default BackgroundImage;
