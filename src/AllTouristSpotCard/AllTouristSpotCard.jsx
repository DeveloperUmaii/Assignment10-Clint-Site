import React from 'react';
import { NavLink } from 'react-router-dom';

const AllTouristSpotCard = ({spot}) => {
    const { _id, image, SpotName, Season, TravelTime, Visitors, Cost } = spot;
    return (
            <div className="flex justify-center my-3">
              <div className="my-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow w-96 overflow-hidden">
                {/* Image Section */}
                <figure className="relative">
                  <img
                    src={spot?.image}
                    alt="Tourist Spot"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h2 className="text-white text-lg font-bold bg-black bg-opacity-50 px-3 py-1 rounded-lg">
                      {spot?.SpotName}
                    </h2>
                  </div>
                </figure>
        
                {/* Card Body */}
                <div className="p-5 text-center space-y-2">
                  <h2 className="text-xl font-bold text-red-500">All Tourist Spot</h2>
                  <p className="text-lg font-semibold text-gray-700">{spot?.Season}</p>
                  <p className="text-sm text-gray-600">⏳ Travel Time: {spot?.TravelTime}</p>
                  <p className="text-sm text-gray-600">👥 Visitors: {spot?.Visitors}</p>
                  <p className="text-lg font-semibold text-green-500">💰 Cost: {spot?.Cost}</p>
        
                  {/* Button */}
                  <NavLink
                    to={`Details/${spot?._id}`}
                    className="inline-block bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all"
                  >
                    View Details →
                  </NavLink>
                </div>
              </div>
            </div> 
    );
};

export default AllTouristSpotCard;