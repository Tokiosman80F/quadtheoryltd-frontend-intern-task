import React from "react";
import bannerImg from "../../assets/images/banner-img.png";
const Banner = () => {
  return (
    <div className="md:bg-amber-500 rounded-3xl flex flex-col justify-center items-center md:flex md:flex-row md:items-center md:justify-evenly md:my-32">
      {/* content */}
      <div className="capitalize text-black md:text-white text-center ">
        <h1 className="text-3xl font-bold px-2 md:text-2xl  ">
          Deliver Food to your door step
        </h1>
        <p className="mt-5">authentic food || quick service , fast deliver</p>
      </div>
      {/* img */}
      <div className="bg-[#f48249] rounded-2xl md:bg-opacity-0">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
