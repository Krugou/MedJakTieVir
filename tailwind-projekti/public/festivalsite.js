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
        // add arrow icon
        const arrow = document.createElement('img');
        arrow.src = "./dist/png/up-arrow2.png";
        arrow.classList.add('arrow', 'w-6', 'h-6');

        const maintitle = document.querySelector('#weatherdata');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const windSpeed = xmlDoc.getElementsByTagName("windSpeed")[0].getAttribute("mps");
        const windDirectionDegree = xmlDoc.getElementsByTagName("windDirection")[0].getAttribute("deg");
        // reverse winddirectiondegree to opposite direction
        const windDirectionDegreeReversed = windDirectionDegree - 180;
        // rotate arrow icon according to wind direction
        arrow.style.transform = "rotate(" + windDirectionDegreeReversed + "deg)";

        const temperature = xmlDoc.getElementsByTagName("temperature")[0].getAttribute("value");
        const output = temperature + "°C" + " " + windSpeed + "m/s ";
        maintitle.textContent = output;
        maintitle.appendChild(arrow);
        document.title = "Kirkenes Film Festival " + output;
    })
    .catch(error => {
        console.error(error);
    });

// make bg image move on mousemove
const bg = document.querySelector('.bg-aurora');
document.addEventListener('mousemove', (e) => {

    bg.style.backgroundPositionX = -e.pageX / 300 + 'px';
});