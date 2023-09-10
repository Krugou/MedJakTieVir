const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
    // Toggle the hidden class on the nav element
    nav.classList.toggle('hidden');
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
fetch("https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=69.7267674114827&lon=30.04699366185751")
    .then(response => response.text())
    .then(data => {
        const maintitle = document.querySelector('#maintitle');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const windSpeed = xmlDoc.getElementsByTagName("windSpeed")[0].getAttribute("mps");
        const windDirection = xmlDoc.getElementsByTagName("windDirection")[0].getAttribute("name");

        const temperature = xmlDoc.getElementsByTagName("temperature")[0].getAttribute("value");
        const output = "Kirkenes Film Festival " + temperature + "°C" + " " + windSpeed + " mps " + windDirection;
        maintitle.textContent = output;
        document.title = output;
    })
    .catch(error => {
        console.error(error);
    });