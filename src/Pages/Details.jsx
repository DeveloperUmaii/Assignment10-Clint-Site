import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const loadedDetails = useLoaderData();
  const {
    image,
    SpotName,
    Country,
    Location,
    Season,
    TravelTime,
    Visitors,
    Description,
    Cost,
  } = loadedDetails;

  return (
    <div className=" flex justify-center items-center min-h-screen  bg-gradient-to-r from-[#f8f8f6] to-[#fcff55] p-2">
      <div className=" relative w-full max-w-4xl max-h-screen flex  bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Image Section */}
        <div className="w-7/12 bg-gray-100 flex justify-center items-center p-6">
          <img src={image} alt={SpotName} className="min-h-full rounded-lg shadow-lg" />
        </div>

        {/* Right Content Section */}
        <div className="w-1/2 p-6 text-white">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-[#3a3939]">{SpotName}</h3>
          </div>

          <h2 className="text-2xl font-bold mt-3 text-[#3a3939]">{Description}</h2>

          {/* Extra Details */}
          <div className="mt-3 space-y-2 text-sm">
            <p className="text-[#3a3939]">📍 <strong>Country:</strong> {Country}</p>
            <p className="text-[#3a3939]">📌 <strong>Location:</strong> {Location}</p>
            <p className="text-[#3a3939]">💰 <strong>Cost:</strong> {Cost}</p>
            <p className="text-[#3a3939]">⏳ <strong>Travel Time:</strong> {TravelTime}</p>
            <p className="text-[#3a3939]">👥 <strong>Visitors:</strong> {Visitors}</p>
          </div>

          {/* Read More Button */}
          <div className="mt-5">
            <Link
              to="/"
              className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-500 transition"
            >
              ← Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
