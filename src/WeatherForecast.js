import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response){

}


let apiKey = "98ba3df7ef91e3454412bee7a0392f55";
let latitude = props.coord.lat;
let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
<div className="col">
    <div className="Forecast-day">Fri</div>
    <WeatherIcon code="11d" size={32}/> 
    <div className="Forecast-temp">
        <span className="Forecast-max">10°</span>
    <span className="Forecast-min">6°</span> 
    </div>

</div>








            </div>
        </div>
    )
}