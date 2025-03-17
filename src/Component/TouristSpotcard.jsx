import { NavLink } from "react-router-dom";

const TouristSpotCard = ({ spot }) => {
    const { _id, image, SpotName, Location, Visitors, Cost } = spot;

    return (
        <div className="my-5 w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">

            {/* Image Section */}
            <div className="relative">
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
            </div>

            {/* Card Body */}
            <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">{SpotName}</h2>
                <p className="text-gray-600 mt-1">📍 {Location}</p>
                <p className="text-gray-500 mt-1">👥 Visitors: {Visitors}</p>
                <p className="text-green-600 font-semibold mt-2">💰 Cost: {Cost}</p>

                {/* Details Button */}
                <div className="mt-4">
                    <NavLink to={`Details/${_id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition">
                        View Details →
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;
