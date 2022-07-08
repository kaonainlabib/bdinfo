import React from "react";
import corona from "../assets/coronavirus.png";
import socialDistancing from "../assets/social-distancing.png";
import { TiTick } from "react-icons/ti";
const Corona = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center pt-20">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img className="h-[7rem]" src={corona} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">Total Test cases</p>
            <p className="font-bold">543,534,534</p>
            <hr />
            <p className="font-bold">Recovered</p>
            <p className="font-bold">6,456,456</p>
            <hr />
            <p className="font-bold">Died</p>
            <p className="font-bold">456,546,546</p>
            <hr />
            <p className="font-bold">Last Updated</p>
            <p className="font-bold">00:00:00 AM</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="py-[10rem] px-10">
        <div className="flex justify-around">
          <div>
            <p className="text-2xl font-bold">
              Ways to protect Corona Virus from spreading to your family
            </p>
            <ul className="text-2xl p-10">
              <li className="flex py-2 font-semibold gap-5"><TiTick/>Wear a mask</li>
              <li className="flex py-2 font-semibold gap-5"><TiTick/>Clean your hands</li>
              <li className="flex py-2 font-semibold gap-5"><TiTick/>Keep a safe distance</li>
              <li className="flex py-2 font-semibold gap-5"><TiTick/>Stay home if you feel unwell</li>
            </ul>
          </div>
          <img className="h-60" src={socialDistancing} alt="" />
        </div>
      </div>
    </>
  );
};

export default Corona;
