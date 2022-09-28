import React from "react";
import { useState,useEffect } from "react";

const Weather = () => {
    const [ searchQuery, setSearchQuery ] = useState('');
    const [data, setData]   = useState('');
    let Apikey = "29911f83f1658a0684c0fc4fbc7a31a2"
    // const api =' https://api.openweathermap.org/data/2.5/weather?q={searchQuery}&appid={key}'
    useEffect(
        () => {
      const getWeather = async () => {
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${Apikey}`);
        let data = await response.json();
        setData(JSON.stringify(data));
        // console.log(data)
      };
      getWeather();
    }, [searchQuery]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      Weather
      <form>
        <input
          type="search"
          name="search"
          value={searchQuery}
          onChange={handleChange}
        ></input>
      </form>
      <pre>{data}</pre>
    </div>
  );
};

export default Weather;
