import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';

export default function WeatherForecast() {
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