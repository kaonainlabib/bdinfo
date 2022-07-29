import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState("");
  const fetchData = (location) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=986b27a9fad74cbeba8113742222207&q=${location}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
    console.log(weatherData);
  };
  const Fdo = (e) => {
    e.preventDefault();
    fetchData(input);
  };
  return (
    <>
      <div className="h-2 w-2 rounded-full" id="weather"></div>
      <div className="h-screen flex justify-center items-center pt-20 flex-col gap-5 z-10">
        <form className="flex z-10" onSubmit={Fdo}>
          <input
            type="text"
            placeholder="Type here"
            className="text-right input input-bordered input-accent w-full max-w-xs"
            onChange={(event) => setInput(event.target.value)}
          />
            <button type="submit" className="absolute "><AiOutlineSearch className="text-5xl text-gray-600 fill-current cursor-pointer"/></button>
        </form>
        {// eslint-disable-next-line eqeqeq
        weatherData?.location?.country === "Bangladesh" ? (<div className="pt-20 md:pt-0 px-10 flex items-start justify-center flex-col gap-3">
        <img src={weatherData?.current?.condition?.icon} alt="" className="scale-110 self-center" />
        <div className="text-2xl md:text-4xl">
          Temperature : {weatherData?.current?.temp_c}°C
        </div>
        <div className="text-2xl md:text-4xl">
          Feels Like : {weatherData?.current?.feelslike_c}°C
        </div>
        <div className="text-2xl md:text-4xl">
          Wind Speed : {weatherData?.current?.wind_mph}mph {weatherData?.current?.wind_degree}°{weatherData?.current?.wind_dir}
          </div>
        <div className="text-2xl md:text-4xl">
          Forecast : {weatherData?.current?.condition?.text}
          </div>
          <div className="text-2xl md:text-4xl">
            Last Updated : {weatherData?.current?.last_updated}
          </div>
        </div>) : (<div className="pt-20 flex items-start justify-center flex-col gap-3">
          Not Found
          </div>)}
        
      </div>
    </>
  );
};

export default Weather;
