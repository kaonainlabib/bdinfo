import React, { useState } from "react";
import weather from "../assets/undraw_weather_app_re_kcb1.svg";
import { AiOutlineSearch } from "react-icons/ai";
import cloudLightning from "../assets/icons8-cloud-lightning-80.png"
import cloud from "../assets/icons8-cloud-80.png";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState("");
  const fetchData = (location) => {
    fetch(
      `https://foreca-weather.p.rapidapi.com/current/102643743?alt=0&tempunit=C&windunit=MS&tz=Asia%2F${location}&lang=en`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0ab0c004d4mshe4c411ed6e0d733p15ee16jsndcb4a5fcffe1',
          'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
      }
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
        {weatherData !== null ? (<div className="h-screen flex items-start justify-center flex-col gap-3">
        <img src={cloud} alt="" className="scale-110 self-center" />
        <div className="text-3xl md:text-4xl">
          Temperature : {weatherData?.current?.temperature}°C
        </div>
        <div className="text-3xl md:text-4xl">
          Feels Like : {weatherData?.current?.feelsLikeTemp}°C
        </div>
        <div className="text-3xl md:text-4xl">
          Wind Speed : {weatherData?.current?.windSpeed}m/s {weatherData?.current?.windDirString}
          </div>
        <div className="text-3xl md:text-4xl">
          Forecast : {weatherData?.current?.symbolString}
          </div>
        </div>) : (<div className="h-screen flex items-start justify-center flex-col gap-3">
          Not Found
          </div>)}
        
        {/* {weatherData?.cod === 200 && weatherData?.sys?.country === "BD" ? (
          <div className="card w-96 bg-base-100 shadow-2xl">
            <figure>
              <img className="h-[10rem]" src={weather} alt="" />
            </figure>
            <div className="card-body text-center text-2xl ">
              <p className="font-bold">
                Today's Weather <br />({weatherData?.name})
              </p>
              <hr />
              <p className="font-bold">
                {(parseInt(weatherData?.main.temp) - 273.15).toFixed(2)}&deg;{" "}
                {weatherData?.weather[0]?.main}
              </p>
              <hr />
              <p className="font-bold">Last Updated</p>
              <p className="font-bold">{new Date().toLocaleTimeString()}</p>
              <hr />
            </div>
          </div>
        ) : navigator.onLine ? (
          <>Not found</>
        ) : (
          <>No internet connection</>
        )} */}
      </div>
    </>
  );
};

export default Weather;
