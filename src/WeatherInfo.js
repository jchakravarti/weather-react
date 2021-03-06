import React from "react";
import FormattedDate from "./FormattedDate";
import './WeatherInfo.css';
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
        <ul className="headings">
            <li className="WeatherInfo-date"> 
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize description">{props.data.description}</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="float-left icon">
                <WeatherIcon code={props.data.icon} alt={props.data.description} size={62} />
                </div>
                <WeatherUnit celsius={props.data.temperature} />
        </div>
        <div className="col-6">
            <ul>
                <li className="humidity">Humidity: {props.data.humidity}%</li>
                <li className="wind">Wind: {props.data.wind} mph</li>
            </ul>
        </div>
        </div>
        </div>
    )
}