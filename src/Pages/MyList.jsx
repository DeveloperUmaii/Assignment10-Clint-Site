import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyTouristSpotCard from '../MyTouristSpotCard/MyTouristSpotCard';

const MyList = () => {
    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        setSpots(loadedSpots);
    }, [loadedSpots]);

    // ✅ ডিলিট করার পর UI থেকে সাথে সাথে ডাটা সরানোর জন্য
    const handleDeleteSpot = (deletedId) => {
        const updatedSpots = spots.filter(spot => spot._id !== deletedId);
        setSpots(updatedSpots);  // ✅ UI আপডেট হচ্ছে
    };

    return (
        <div>
            <h1 className="text-3xl text-center">আমার পর্যটন স্পটের তালিকা {spots.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-2 p-4 lg:px-1">
                {spots.map((spot) => (
                    <MyTouristSpotCard
                        key={spot._id}
                        spot={spot}
                        onDelete={handleDeleteSpot} // ✅ এখানে ফাংশন পাঠানো হচ্ছে
                    />
                ))}
            </div>
        </div>
    );
};

export default MyList;



