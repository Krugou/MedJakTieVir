import {useState} from 'react';
import AudioPlayer from '../components/AudioPlayer.jsx';
import HamburgerButton from '../components/HamburgerButton.jsx';
import Nav from '../components/Nav.jsx';
import TitleWeather from '../components/TitleWeather.jsx';
const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
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
        const playButton = document.querySelector('#playButton');
        if (playButton.textContent === 'Play festival theme') {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000);
        }
    };

    return (
        <header className="flex justify-between m-2 p-4 items-center">
            <AudioPlayer isAudioPlaying={isAudioPlaying} toggleAudio={toggleAudio} />
            <TitleWeather />
            <Nav isNavOpen={isNavOpen} />
            <HamburgerButton toggleNav={toggleNav} />
            {showPopup && (
                <div className="p-2 m-4 rounded bg-gray-200 text-gray-800 absolute top-6 left-1/2" >
                    <div className="flex items-center flex-col">
                        <img
                            src="./img/artist.jpeg"
                            alt="Detektivbyrån"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                            <h1 className="text-2xl font-bold">Detektivbyrån</h1>
                            <p className="text-gray-600">om du möter varg and e18  </p>
                        </div>
                    </div>

                </div>
            )}

        </header>
    );
};

export default Header;