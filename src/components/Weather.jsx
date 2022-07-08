import React from 'react'
import weather from "../assets/undraw_weather_app_re_kcb1.svg";
const Weather = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img className='h-[10rem]' src={weather} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">Today's Weather</p>
            <hr />
            <p className="font-bold">34&deg; Cloudy</p>
            <hr />
            <p className="font-bold">Last Updated</p>
            <p className="font-bold">00:00:00 AM</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather