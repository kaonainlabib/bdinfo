import React, { useEffect, useState } from "react";
import people from "../assets/undraw_grades_re_j7d6.svg";
import { VscLoading } from "react-icons/vsc";

const Population = () => {
  const [People, setPeople] = useState(null);
  const pleaseFetch = () => {
    fetch(
      "https://world-population.p.rapidapi.com/population?country_name=Bangladesh",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0ab0c004d4mshe4c411ed6e0d733p15ee16jsndcb4a5fcffe1",
          "X-RapidAPI-Host": "world-population.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((PeopleData) => setPeople(PeopleData));
  };
  useEffect(() => {
    pleaseFetch();
  }, []);
  console.log(People);
  return (
    <>
      <div className="h-2 w-2 rounded-full" id="population"></div>
      <div className="h-screen flex justify-center items-center">
        <div className="card w-[20rem] md:w-96 bg-base-100 shadow-2xl">
          <figure>
            <img src={people} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">Total Population (BD)</p>
            <p className="font-bold">{People?.body ? (People?.body?.population) : (
              <div className="flex justify-center text-3xl animate-spin text-center">

              <VscLoading />
              </div>
            )}</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Population;
