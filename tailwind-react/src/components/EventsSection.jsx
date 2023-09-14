import '@videojs/themes/dist/fantasy/index.css';
import React from 'react';
import videojs from 'video.js';
import VideoPlayer from './VideoPlayer.jsx';
const EventsSection = () => {
  const playerRef = React.useRef(null);


  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    inactivityTimeout: 0,
    fluid: true,
    sources: [{
      src: 'http://195.148.104.124:1935/jakelu/disconnecte/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    html5: {
      vhs: {
        overrideNative: true
      }
    },
    poster: './img/aurora.png'


  };




  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  return (
    <section className="border rounded flex flex-col md:flex-row justify-center items-center md:items-start p-4 mb-8">
      <div className="md:w-1/2 m-4 ">
        <h2 className="text-2xl font-bold mybasetext mb-4">Events During the Festival</h2>
        <ul className="list-disc mybasetext pl-6">
          <li className="mybasetext mb-4">Opening Night Gala - Join us for a glamorous red carpet event.</li>
          <li className="mybasetext mb-4">Screening of Award-Winning Films - Experience cinematic excellence.</li>
          <li className="mybasetext mb-4">Q&A Sessions with Filmmakers - Get insights from the creators.</li>
          <li className="mybasetext mb-4">Cinema Under the Stars - Enjoy outdoor screenings.</li>
          <li className="mybasetext mb-4">Film Workshops and Panels - Learn from industry experts.</li>
        </ul>
        <a href="#" className="mybasetext mybutton py-2 px-4 rounded-md">
          See Full Schedule
        </a>
      </div>
      <div className="relative m-4  w-full h-96">
        <VideoPlayer className="w-full h-full " options={videoJsOptions} onReady={handlePlayerReady} />
        <iframe
          className="w-full h-full hidden"
          src="https://www.youtube.com/embed/Ecl6qzZqxQM?si=jbam-BPnQxKFOhhA&amp;controls=0;autoplay=1;mute=1;loop=1;"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default EventsSection;