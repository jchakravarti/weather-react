import React, { useState } from "react";
import './WeatherUnit.css';

export default function WeatherUnit(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
return (
        <div className="WeatherUnit">
        <span className="temperature float-left">
        {Math.round(props.celsius)} </span> 
        <span className="tempUnit float-left">°C | <a href="/" onClick={convertToFahrenheit}>°F</a> </span>
        
        </div>
    )
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <div className="WeatherUnit">
        <span className="temperature">
        {Math.round(fahrenheit)} </span> 
        <span className="tempUnit"><a href="/" onClick={convertToCelsius}>°C</a> | °F </span>
        
        </div>
    )
    }
    
}