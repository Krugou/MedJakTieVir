import {useState} from 'react';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleAudio = () => {
        const audio = document.querySelector('audio');
        if (isAudioPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsAudioPlaying(!isAudioPlaying);
    };
    return (
        <header className="flex justify-between m-2 p-4 items-center">
            <audio>
                <source src="./dist/ogg/festivaltunes.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
            <button
                className="p-2 m-4 rounded mybutton mybasetext"
                id="playButton"
                onClick={toggleAudio}
            >
                {isAudioPlaying ? 'Pause festival theme' : 'Play festival theme'}
            </button>

            <a
                href="./index.html"
                className="logo text-2xl font-bold mybasetext hover:text-alecharcoal"
                id="maintitle"
            >
                Kirkenes Film Festival
            </a>
            <div className="flex md:flex-row flex-col" id="weatherdata"></div>
            <nav className={`nav ${isNavOpen ? '' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row">
                    <li className="mybutton mybasetext" id="about">
                        <a href="#about" className="nav-link ">
                            About
                        </a>
                    </li>
                    <li className="mybutton mybasetext" id="schedule">
                        <a href="#schedule" className="nav-link ">
                            Schedule
                        </a>
                    </li>
                    <li className="mybutton mybasetext" id="tickets">
                        <a href="#tickets" className="nav-link ">
                            Tickets
                        </a>
                    </li>
                </ul>
            </nav>
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
        </header>
    );
};

export default Header;