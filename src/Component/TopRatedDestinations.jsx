import React from "react";

const topDestinations = [
  {
    name: "HONG-KONG",
    location: "China",
    image: "https://i.ibb.co.com/rKXtLQPK/hong-kong.jpg",
    rating: 4.9,
  },
  {
    name: "TOKIYO",
    location: "Japan",
    image: "https://i.ibb.co.com/VY0YRJRp/Tokiyo.jpg",
    rating: 4.8,
  },
  {
    name: "BALI",
    location: "Indunesia",
    image: "https://i.ibb.co.com/dwYtFmRB/Bali.jpg",
    rating: 4.7,
  },
];

const TopRatedDestinations = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Top Rated Destinations Asia</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {topDestinations.map((place, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 bg-white">
            <img src={place.image} alt={place.name} className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-semibold">{place.name}</h3>
            <p className="text-gray-600">{place.location}</p>
            <p className="text-yellow-500 text-lg font-bold mt-2">⭐ {place.rating}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedDestinations;
