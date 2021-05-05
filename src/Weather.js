import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({});
const [ready, setReady] = useState(false);
function handleResponse(response) {
    setWeatherData({
        city: response.data.name,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
    });
    setReady(true);
}

if (ready) {
    return (
        <div className="weather">     
            <form>
                <div className="row">
                <div className="col-8">
                <input type="search" placeholder="Enter a city" className="form-control" />
                </div>
                <div className="col-4">
                <input type="submit" className="btn-primary" placeholder="Search" />
                </div>
                </div>
            </form>
            
        <h1>{weatherData.city}</h1>
        <ul>
            <li>Monday, 16:30 </li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
            <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt={weatherData.description} />
        {Math.round(weatherData.temperature)}°C
        </div>
        <div className="col-6">
            <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} mph</li>
            </ul>
        </div>
        </div>
        </div>
    )

} else {
let apiKey = "98ba3df7ef91e3454412bee7a0392f55";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
}    
}