import React, { useState } from 'react'
import axios from 'axios'
import '../index.css';

const Forecast = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;
  
    const searchLocation = (event) => {
      if (event.key === "Enter") {
        axios.get(url).then((response) => {
          setData(response.data);
          console.log(response.data);
        });
        setLocation("");
      }
    };
  
    return (
      <div className="weather-app">
        {/* SECTION */}
        <section className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </section>
        <div className="back-button">
            <a href="/">Back</a>
        </div>
        
        {/* SECTION ends*/}
        <div className="container">
          {/* SECTION */}
          <section className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </section>
          {/* SECTION ends*/}
          {/* SECTION */}
          {data.name !== undefined && (
            <section className="bottom">
              <div className="feels">
                <p>Feels Like</p>
                {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
              </div>
              <div className="humidity">
                <p>Humidity</p>
                {data.main ? <p>{data.main.humidity}%</p> : null}
              </div>
              <div className="wind">
                <p>Wind Speed</p>
                {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
              </div>
            </section>
          )}{" "}
          {/* SECTION ends*/}
        </div>
      </div>
    );
  }

export default Forecast;