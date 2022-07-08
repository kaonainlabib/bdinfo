import React from "react";
import people from "../assets/undraw_grades_re_j7d6.svg"
const Population = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img src={people} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">Total Population (BD)</p>
            <p className="font-bold">543,534,534</p>
            <hr />
            <p className="font-bold">Died</p>
            <p className="font-bold">6,456,456</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Population;
