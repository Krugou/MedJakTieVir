const Nav = ({isNavOpen}) => {
    return (
        <nav className={`nav ${isNavOpen ? '' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row">
                <li className="mybutton mybasetext" id="about">
                    <a href="/react/about" className="nav-link ">
                        About
                    </a>
                </li>
                <li className="mybutton mybasetext" id="schedule">
                    <a href="/react/schedule" className="nav-link ">
                        Schedule
                    </a>
                </li>
                <li className="mybutton mybasetext" id="tickets">
                    <a href="/react/tickets" className="nav-link ">
                        Tickets
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;