const HamburgerButton = ({toggleNav}) => {
    return (
        <button
            className="hamburger m-2 p-4 flex flex-col justify-center items-center md:hidden"
            type="button"
            aria-label="Menu"
            onClick={toggleNav}
        >
            <span className="bar h-1 w-6 bg-white rounded-full mb-1"></span>
            <span className="bar h-1 w-6 bg-white rounded-full mb-1"></span>
            <span className="bar h-1 w-6 bg-white rounded-full"></span>
        </button>
    );
};

export default HamburgerButton;