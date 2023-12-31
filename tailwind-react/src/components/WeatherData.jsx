import {useEffect, useState} from 'react';

const WeatherData = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=69.7267674114827&lon=30.04699366185751'
                );
                const data = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');
                const windSpeed = xmlDoc.getElementsByTagName('windSpeed')[0].getAttribute('mps');
                const windDirectionDegree = xmlDoc.getElementsByTagName('windDirection')[0].getAttribute('deg');
                const weatherCode = xmlDoc.getElementsByTagName('symbol')[0].getAttribute('code');
                // reverse winddirectiondegree to opposite direction
                const windDirectionDegreeReversed = windDirectionDegree - 180;
                const temperature = xmlDoc.getElementsByTagName('temperature')[0].getAttribute('value');
                const windSpeedOutput = windSpeed + ' m/s';
                const temperatureOutput = temperature + '°C';

                setWeatherData({windSpeedOutput, temperatureOutput, windDirectionDegreeReversed, weatherCode});
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    if (!weatherData) {
        return null;
    }

    const {temperatureOutput, windSpeedOutput, windDirectionDegreeReversed, weatherCode} = weatherData;

    return (
        <div id="weatherdata" className='flex flex-col md:flex-row '>
            <p className="mybasetext">{temperatureOutput}</p>
            <img src={`./weather/png/${weatherCode}.png`} alt='Weather icon' className='w-6 h-6 bg-white rounded-full p-1 mx-2 my-2 md:my-0 inline-block align-middle transform transition duration-500 ease-in-out' />
            <p className="mybasetext">{windSpeedOutput}</p>

            <img
                src="./png/up-arrow2.png"
                alt="Wind direction arrow"
                className="arrow w-6 h-6 bg-white rounded-full p-1 mx-2 my-2 md:my-0 inline-block align-middle transform transition duration-500 ease-in-out"
                style={{transform: `rotate(${windDirectionDegreeReversed}deg)`}}
            />
        </div>
    );
};

export default WeatherData;