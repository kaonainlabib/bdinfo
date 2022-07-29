import React, { useEffect, useState } from "react";
import corona from "../assets/coronavirus.png";
import socialDistancing from "../assets/social-distancing.png";
import { TiTick } from "react-icons/ti";
import { VscLoading } from "react-icons/vsc";
const Corona = () => {
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
    <>
      <div className="h-2 w-2 rounded-full"></div>
      <div className="h-screen flex justify-center items-center pt-60">
        <div className="card w-[20rem] md:w-96 bg-base-100 shadow-2xl">
          <figure>
            <img className="h-[7rem]" src={corona} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">Total cases (BD)</p>
            <p className="font-bold">{Corona?.data ? (Corona?.data["Total Cases"]) : (
              <div className="flex justify-center text-3xl animate-spin text-center">

              <VscLoading />
              </div>
            )}</p>
            <hr />
            <p className="font-bold">Recovered</p>
            <p className="font-bold">{Corona?.data ? (Corona?.data["Total Recovered"]) : (
              <div className="flex justify-center text-3xl animate-spin text-center">

              <VscLoading />
              </div>
            )}</p>
            <hr />
            <p className="font-bold">Died</p>
            <p className="font-bold">{Corona?.data ? (Corona?.data["Total Deaths"]) : (
              <div className="flex justify-center text-3xl animate-spin text-center">

              <VscLoading />
              </div>
            )}</p>
            <hr />
            <p className="font-bold">Last Updated</p>
            <p className="font-bold">{Corona?.data ? (Corona?.last_update) : (
              <div className="flex justify-center text-3xl animate-spin text-center">

              <VscLoading />
              </div>
            )}</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="py-[10rem] px-10">
        <div className="flex flex-col-reverse sm:flex-row justify-around">
          <div>
            <p className="text-2xl font-bold">
              Ways to protect Corona Virus from spreading to your family:
            </p>
            <ul className="text-xl px-5 py-2">
              <li className="flex py-2 font-semibold gap-5">
                <div><TiTick className="text-2xl" /></div>
                Wear a mask everytime you go outside
              </li>
              <li className="flex py-2 font-semibold gap-5">
                <div><TiTick className="text-2xl" /></div>
                Clean your hands whenever you come back home
              </li>
              <li className="flex py-2 font-semibold gap-5">
                <div><TiTick className="text-2xl" /></div>
                Keep a safe distance from others
              </li>
              <li className="flex py-2 font-semibold gap-5">
                <div><TiTick className="text-2xl" /></div>
                Stay home if you feel illness
              </li>
            </ul>
          </div>
          <div className="flex justify-center pb-20 sm:pb-0">
            <img
              className="h-40 sm:h-40 md:h-60"
              src={socialDistancing}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Corona;
