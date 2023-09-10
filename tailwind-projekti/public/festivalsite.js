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

const about = document.querySelector('#about');
const schedule = document.querySelector('#schedule');
const tickets = document.querySelector('#tickets');


// silly script to make text flash
// Get all text elements
const textElements = document.querySelectorAll('.mybasetext');

// Set the timer to 5 minutes (in milliseconds)
const timer = 5 * 60 * 1000;

// Set the initial timeout to null
let timeout = null;

// Add event listener for mousemove
document.addEventListener('mousemove', () => {
    // Clear the timeout
    clearTimeout(timeout);

    // Remove the animate class from all text elements
    textElements.forEach(element => {
        element.classList.remove('animate');
    });

    // Set a new timeout
    timeout = setTimeout(() => {
        // Add the animate class to all text elements
        textElements.forEach(element => {
            element.classList.add('animate');
        });
    }, timer);
});
