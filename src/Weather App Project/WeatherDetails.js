import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiKey = "3d5face26108c34b141f51cd095d0f00";

function WeatherDetails() {
  const { city } = useParams(); 
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
      try {
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
          .then((response)=>(setWeatherData(response.data)))

      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
  });

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }else{

  return (
    <div>
      <h1>Weather in {city}</h1>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );}
}

export default WeatherDetails;