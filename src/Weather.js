import React from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${Math.round(response.data.main.temp)}`)
    }
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=98ba3df7ef91e3454412bee7a0392f55&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="container">
            <form>
                <input type="search" />
                <input type="submit" className="btn btn-secondary"/>
            </form>
            <h1>
                London
            </h1>
            <h2>
                Sunday 14:00
            </h2>
            <h3>
                Sunny
            </h3>
            <div className="row">
                <div className="col-sm-1">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Sunny day" />
                </div>
                <div className="col-sm-1">
                    13°C
                </div>
            </div>
            <p>
                   <a href="https://github.com/jchakravarti/weather-react"> Open source code </a> by Jayani Chakravarti 
                </p>
        </div>
    )
}