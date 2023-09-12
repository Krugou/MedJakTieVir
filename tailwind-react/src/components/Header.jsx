import {useState} from 'react';
import AudioPlayer from './subcomponents/AudioPlayer.jsx';
import HamburgerButton from './subcomponents/HamburgerButton.jsx';
import Nav from './subcomponents/Nav.jsx';
import TitleWeather from './subcomponents/TitleWeather.jsx';

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
            <AudioPlayer isAudioPlaying={isAudioPlaying} toggleAudio={toggleAudio} />
            <TitleWeather />
            <div className="flex md:flex-row flex-col" id="weatherdata"></div>
            <Nav isNavOpen={isNavOpen} />
            <HamburgerButton toggleNav={toggleNav} />
        </header>
    );
};

export default Header;