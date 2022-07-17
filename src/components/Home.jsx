import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/Fresh_Folk_-_Standing-removebg-preview.png";
import cloudy from "../assets/icons8-cloud-80.png";
import corona from "../assets/icons8-coronavirus-96.png";
import weather from "../assets/undraw_weather_app_re_kcb1.svg";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState("");
  const fetchData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=7668eedbdd8fdc23bde18f33af1f6655`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
    console.log(weatherData);
  };
  useEffect(() => {
    fetchData(input);
  }, []);
  const [Corona, setCorona] = useState(null);
  const pleaseFetch = () => {
    fetch(
      "https://worldometers.p.rapidapi.com/api/coronavirus/country/Bangladesh",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0ab0c004d4mshe4c411ed6e0d733p15ee16jsndcb4a5fcffe1",
          "X-RapidAPI-Host": "worldometers.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((coronaData) => setCorona(coronaData));
  };
  useEffect(() => {
    pleaseFetch();
  }, []);
  return (
    <div className="z-10">
      <div className="flex justify-around pt-20 sm:pt-20 px-10 sm:px-20 ">
        <img className="bg-transparent" src={image} alt="" />
        <div id="" className="sm:max-w-sm pt-20">
          <div className="text-3xl md:text-4xl">
            Get instant updates about{" "}
            <span className="text-green-500">Bangladesh's</span> weather, Corona
            updates, population and so on...
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center pt-20 flex-col">
        <NavLink to="/weather">
          <div className="card w-96 bg-base-100 shadow-2xl z-10">
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
        </NavLink>
      </div>
      <div className="h-[] md:h-screen flex justify-center items-center pb-20 sm:">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img className="h-[7rem]" src={corona} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">Total cases (BD)</p>
            <p className="font-bold">{Corona?.data["Total Cases"]}</p>
            <hr />
            <p className="font-bold">Recovered</p>
            <p className="font-bold">{Corona?.data["Total Recovered"]}</p>
            <hr />
            <p className="font-bold">Died</p>
            <p className="font-bold">{Corona?.data["Total Deaths"]}</p>
            <hr />
            <p className="font-bold">Last Updated</p>
            <p className="font-bold">{Corona?.last_update}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
