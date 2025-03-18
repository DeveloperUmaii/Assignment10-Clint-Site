import { useParams } from "react-router-dom";

const touristSpots = {
    0: [
        {
            name: "Eiffel Tower",
            image: "https://source.unsplash.com/400x300/?eiffel-tower",
            specialty: "Iconic landmark of Paris",
            bestSeason: "Spring & Fall",
        },
        {
            name: "Louvre Museum",
            image: "https://source.unsplash.com/400x300/?louvre-museum",
            specialty: "World-famous art museum",
            bestSeason: "All year",
        },
    ],
    1: [
        {
            name: "Santorini Beaches",
            image: "https://source.unsplash.com/400x300/?santorini",
            specialty: "Beautiful white and blue architecture",
            bestSeason: "Summer",
        },
        {
            name: "Acropolis of Athens",
            image: "https://source.unsplash.com/400x300/?acropolis",
            specialty: "Ancient Greek architecture",
            bestSeason: "Spring & Fall",
        },
    ],
};

const CountriesSpeacialSpot = () => {
    const { id } = useParams();
    const spots = touristSpots[id] || [];

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Tourist Spots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {spots.length > 0 ? (
                    spots.map((spot, index) => (
                        <div key={index} className="border rounded-lg shadow-lg p-4 bg-white hover:scale-105">
                            <img src={spot.image} alt={spot.name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold">{spot.name}</h3>
                            <p className="text-gray-600">🌍 {spot.specialty}</p>
                            <p className="text-blue-600 font-semibold">📅 Best Season: {spot.bestSeason}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-red-500">No Tourist Spots Found</p>
                )}
            </div>
        </div>
    );
};

export default CountriesSpeacialSpot;
