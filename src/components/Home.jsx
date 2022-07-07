import React from "react";
import image from "../assets/Fresh Folk - Standing.png";
import cloudy from "../assets/icons8-cloud-80.png";
import corona from "../assets/icons8-coronavirus-96.png";
const Home = () => {
  return (
    <>
      <div className="flex justify-around pt-20 px-20">
        <img className="bg-current" src={image} alt="" />
        <div className="max-w-xl pt-20">
          <div className="text-4xl">
            Get instant updates about{" "}
            <span className="text-green-500">Bangladesh's</span> weather, Corona
            updates, population and so on...
          </div>
        </div>
      </div>
      <div className="h-[80vh] flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img src={cloudy} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">24&deg;</p>
            <p>Sunny</p>
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img src={corona} alt="" />
          </figure>
          <div className="card-body text-center text-2xl ">
            <p className="font-bold">Test cases</p>
            <p className="font-bold">543,534,534</p>
            <hr />
            <p className="font-bold">Recovered</p>
            <p className="font-bold">6,456,456</p>
            <hr />
            <p className="font-bold">Died</p>
            <p className="font-bold">456,546,546</p>
            <hr />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
