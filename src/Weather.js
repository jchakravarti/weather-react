import React from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {
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
            
        <h1>London, UK</h1>
        <ul>
            <li>Monday, 16:30 </li>
            <li>Rain</li>
        </ul>
        <div className="row">
            <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="Rain" />
        9°C
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 98%</li>
                <li>Humidity: 89%</li>
                <li>Wind: 16 mph</li>
            </ul>
        </div>
        </div>
        </div>
    )
}