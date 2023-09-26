import React from 'react';
import {useNavigate} from 'react-router-dom';

const Nav = ({isNavOpen}) => {
    const navigate = useNavigate();

    return (
        <nav className={`nav ${isNavOpen ? '' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row">
                <li className="mybutton mybasetext" id="about">
                    <button
                        className="nav-link"
                        onClick={() => navigate('/about')}
                    >
                        About
                    </button>
                </li>
                <li className="mybutton mybasetext" id="schedule">
                    <button
                        className="nav-link"
                        onClick={() => navigate('/schedule')}
                    >
                        Schedule
                    </button>
                </li>
                <li className="mybutton mybasetext" id="tickets">
                    <button
                        className="nav-link"
                        onClick={() => navigate('/tickets')}
                    >
                        Tickets
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;