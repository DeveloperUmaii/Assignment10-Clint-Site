import React from "react";

const topDestinations = [
  {
    name: "Eiffel Tower",
    location: "Paris, France",
    image: "https://source.unsplash.com/400x300/?eiffel-tower",
    rating: 4.9,
  },
  {
    name: "Santorini",
    location: "Greece",
    image: "https://source.unsplash.com/400x300/?santorini",
    rating: 4.8,
  },
  {
    name: "Great Wall of China",
    location: "China",
    image: "https://source.unsplash.com/400x300/?great-wall-china",
    rating: 4.7,
  },
];

const TopRatedDestinations = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Top Rated Destinations</h2>
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
