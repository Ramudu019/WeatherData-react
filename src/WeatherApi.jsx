import axios from "axios";
import React, { useState } from "react";
import "./WeatherApi.Module.css";

const WeatherApi = () => {
  let [city, setCity] = useState("");
  let [weatherInfo, setWeatherInfo] = useState(null);

  let fetchData = async () => {
    let apikey = "5c556d99567e3225551333b6f3520e74";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
      let response = await axios.get(apiUrl);
      setWeatherInfo(response.data);

      // console.log(response)
    } catch (error) {
      alert("City Not Found");
    }
  };

  return (
    <div id="Main-container">
      <h1>Weather Information</h1>

      <div className="btn-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city Name"
        />
        <button onClick={fetchData}>Get Weather</button>
      </div>

      {weatherInfo && (
        <div className="Info-card">
          <h2>{weatherInfo.name}</h2>
          <h3>Temperature: {weatherInfo.main.temp}°C</h3>
          <h3>Weather: {weatherInfo.weather[0].description}</h3>
          <h3>Country:{weatherInfo.sys.country}</h3>
          <h3>Wind Speed:{weatherInfo.wind.speed}</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherApi;
