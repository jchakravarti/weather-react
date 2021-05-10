import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({});
const [city, setCity] = useState(props.defaultCity);
const [ready, setReady] = useState(false);
function handleResponse(response) {
    setWeatherData({
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
    });
    setReady(true);
}

function search() {
let apiKey = "98ba3df7ef91e3454412bee7a0392f55";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event) {
    event.preventDefault();
search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (ready) {
    return (
        <div className="weather">     
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-8">
                <input type="search" placeholder="Enter a city" className="form-control" onChange={handleCityChange} />
                </div>
                <div className="col-4">
                <input type="submit" className="btn-primary" placeholder="Search" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
        </div>
    )

} else {
search();
    return "Loading..";
}    
}