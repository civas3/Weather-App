
import React, { useState } from "react";
import axios from "axios";

function App() {
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
      {/* SECTION ends*/}
      <div className="container container-about-us">
        <h2>Welcome to PurpleBeard Weather App</h2>
        <img src="https://purplebeard.co.uk/wp-content/uploads/2019/07/Finalwhite-300x108.png" width={300}></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sem et ligula efficitur viverra ut vel sapien. Maecenas a ornare metus. Vivamus sapien quam, tempor congue pretium eget, euismod at est. Ut accumsan imperdiet nisi ac faucibus. Morbi tortor sapien, ultrices in efficitur ut, tempor a erat. Nunc blandit tempor egestas. Vestibulum maximus consequat metus eu vulputate.</p>
        <a class="button" href="https://purplebeard.co.uk/" target={"_blank"}>Hire a Developer</a>
      </div>
    </div>
  );
}

export default App;
