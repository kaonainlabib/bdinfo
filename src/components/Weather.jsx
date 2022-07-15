import React, { useState } from "react";
import weather from "../assets/undraw_weather_app_re_kcb1.svg";
import { AiOutlineSearch } from "react-icons/ai";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState("");
  const fetchData = (location) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7668eedbdd8fdc23bde18f33af1f6655`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
    console.log(weatherData)
  };
  const Fdo = () => {fetchData(input);
   }
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <div className="flex" onDragEnter={Fdo}>
          <input
            type="text"
            placeholder="Type here"
            className="text-right input input-bordered input-accent w-full max-w-xs"
            onChange={(event) => setInput(event.target.value)}
          />
          <AiOutlineSearch
            className="absolute  text-5xl text-gray-600 fill-current cursor-pointer"
            onClick={Fdo}
          />
        </div>

        {weatherData?.cod === 200 && weatherData?.sys?.country === "BD" ?(<div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img className="h-[10rem]" src={weather} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">Today's Weather</p>
            <hr />
            <p className="font-bold">{(parseInt(weatherData?.main.temp) - 273.15).toFixed(2)}&deg; {weatherData?.weather[0]?.main}</p>
            <hr />
            <p className="font-bold">Last Updated</p>
            <p className="font-bold">{new Date().toLocaleTimeString()}</p>
            <hr />
          </div>
        </div>) : ((navigator.onLine ? <>Not found</> : <>No internet connection</>))}
      </div>
    </>
  );
};

export default Weather;
