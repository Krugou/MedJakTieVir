import { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer.jsx';
import HamburgerButton from '../components/HamburgerButton.jsx';
import Nav from '../components/Nav.jsx';
import TitleWeather from '../components/TitleWeather.jsx';
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
            <Nav isNavOpen={isNavOpen} />
            <HamburgerButton toggleNav={toggleNav} />

        </header>
    );
};

export default Header;