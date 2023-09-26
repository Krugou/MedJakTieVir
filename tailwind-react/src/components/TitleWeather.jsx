import {useNavigate} from "react-router-dom";
import WeatherData from "./WeatherData";

const TitleWeather = () => {
    const navigate = useNavigate();

    return (
        <>
            <button
                onClick={() => navigate("/")}
                className="logo text-2xl font-bold mybasetext nav-link hover:text-alecharcoal"
                id="maintitle"
            >
                Kirkenes Film Festival
            </button>
            <WeatherData />
        </>
    );
};

export default TitleWeather;