export const BackdropMenu = ({ onClick }) => {
    return (
        <div onClick={onClick} className="fixed top-0 left-0 -z-50 h-full w-full cursor-default bg-transparent"></div>
    );
};
