import '@videojs/themes/dist/fantasy/index.css';
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';


export const VideoPlayer = (props) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const {options, onReady} = props;

    React.useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <>
            <div data-vjs-player className="w-full h-full">
                <div ref={videoRef} className="video-js   vjs-theme-city " >
                    <style jsx>{`
                    .video-js {
                        width: 100%;
                        height: 100%;
                    }
                    .vjs-theme-city .vjs-control-bar {
                        background-color: #153640;
                    }
                    .vjs-big-play-button {
                        background-color: rgba(255, 255, 255, 0.8);
                        border-radius: 9999px;
                        padding: 16px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    .vjs-big-play-button:hover {
                        background-color: rgba(255, 255, 255, 1);
                    }
                `}</style>
                </div>
            </div>
            <div className='w-100 h-auto'>
                
            </div>
        </>);
};

export default VideoPlayer;