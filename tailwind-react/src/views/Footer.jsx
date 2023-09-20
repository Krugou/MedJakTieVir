import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-center flex-row p-2 text-white">
            <div className="container flex flex-row xs:flex-col p-2 justify-center">
                <div className="w-full xs:w-1/2 md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Explore</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="schedule2">
                            <a href="/react/schedule">Schedule</a>
                        </li>
                        <li className="mybutton" id="films">
                            <a href="/react/films">Films</a>
                        </li>
                        <li className="mybutton" id="events">
                            <a href="/react/events">Events</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full xs:w-1/2 md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Connect</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="contact">
                            <a href="/react/contact">Contact</a>
                        </li>
                        <li className="mybutton" id="socialmedia">
                            <a href="/react/socialmedia">Social Media</a>
                        </li>
                        <li className="mybutton" id="newsletter">
                            <a href="/react/newsletter">Newsletter</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full xs:w-1/2 md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg md:text-xl font-bold mb-2">About Us</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="mission">
                            <a href="/react/mission">Mission</a>
                        </li>
                        <li className="mybutton" id="team">
                            <a href="/react/team">Team</a>
                        </li>
                        <li className="mybutton" id="partners">
                            <a href="/react/partners">Partners</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;