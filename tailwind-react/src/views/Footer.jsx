import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-center flex-row p-2 text-white">
            <div className="container flex flex-row xs:flex-col p-2 justify-center">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Explore</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="schedule2">
                            <a href="#">Schedule</a>
                        </li>
                        <li className="mybutton" id="films">
                            <a href="#">Films</a>
                        </li>
                        <li className="mybutton" id="events">
                            <a href="#">Events</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Connect</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="contact">
                            <a href="#">Contact</a>
                        </li>
                        <li className="mybutton" id="socialmedia">
                            <a href="#">Social Media</a>
                        </li>
                        <li className="mybutton" id="newsletter">
                            <a href="#">Newsletter</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">About Us</h3>
                    <ul className="list-none">
                        <li className="mybutton" id="mission">
                            <a href="#">Mission</a>
                        </li>
                        <li className="mybutton" id="team">
                            <a href="#">Team</a>
                        </li>
                        <li className="mybutton" id="partners">
                            <a href="#">Partners</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;