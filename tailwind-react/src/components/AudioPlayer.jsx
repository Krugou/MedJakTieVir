import PropTypes from 'prop-types';
const AudioPlayer = ({isAudioPlaying, toggleAudio}) => {

    return (
        <>
            <audio>
                <source src="./ogg/festivaltunes.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
            <button
                className="p-2 m-4 rounded mybutton mybasetext text-md md:text-xl"
                id="playButton"
                onClick={toggleAudio}
            >

                {isAudioPlaying ? 'Pause festival theme' : 'Play festival theme'}
            </button>



        </>
    );
};

AudioPlayer.propTypes = {
    isAudioPlaying: PropTypes.bool.isRequired,
    toggleAudio: PropTypes.func.isRequired
};

export default AudioPlayer;