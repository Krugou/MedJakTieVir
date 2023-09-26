import React from 'react';
import {useNavigate} from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="flex justify-center flex-row p-2 text-white">
            <div className="container flex flex-row xs:flex-col p-2 justify-center">
                <div className="w-full xs:w-1/2 md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Explore</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="schedule2">
                            <button onClick={() => navigate('/schedule')}>Schedule</button>
                        </li>
                        <li className="mybutton" id="films">
                            <button onClick={() => navigate('/films')}>Films</button>
                        </li>
                        <li className="mybutton" id="events">
                            <button onClick={() => navigate('/events')}>Events</button>
                        </li>
                    </ul>
                </div>
                <div className="w-full xs:w-1/2 md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Connect</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="contact">
                            <button onClick={() => navigate('/contact')}>Contact</button>
                        </li>
                        <li className="mybutton" id="socialmedia">
                            <button onClick={() => navigate('/socialmedia')}>Social Media</button>
                        </li>
                        <li className="mybutton" id="newsletter">
                            <button onClick={() => navigate('/newsletter')}>Newsletter</button>
                        </li>
                    </ul>
                </div>
                <div className="w-full xs:w-1/2 md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg md:text-xl font-bold mb-2">About Us</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="mission">
                            <button onClick={() => navigate('/mission')}>Mission</button>
                        </li>
                        <li className="mybutton" id="team">
                            <button onClick={() => navigate('/team')}>Team</button>
                        </li>
                        <li className="mybutton" id="partners">
                            <button onClick={() => navigate('/partners')}>Partners</button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;