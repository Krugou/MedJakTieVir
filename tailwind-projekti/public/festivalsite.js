const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});
const playButtonFunction = () => {
    const playButton = document.querySelector('#playButton');

    playButton.addEventListener('click', () => {

        const audio = document.querySelector('audio');
        audio.addEventListener('ended', () => {
            playButton.textContent = 'Play festival theme';
            playButtonFunction();
        });
        audio.play();
        playButton.textContent = 'Pause festival theme';
        playButton.addEventListener('click', () => {
            audio.pause();
            playButton.textContent = 'Play festival theme';
            playButtonFunction();
        });
    });
};
playButtonFunction();