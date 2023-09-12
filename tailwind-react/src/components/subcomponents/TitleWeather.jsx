import WeatherData from "./WeatherData";

const TitleWeather = () => {
    return (
        <>
                <a
                    href="./index.html"
                    className="logo text-2xl font-bold mybasetext hover:text-alecharcoal"
                    id="maintitle"
                >
                    Kirkenes Film Festival
                </a>
                <WeatherData />
        </>);
};

export default TitleWeather;