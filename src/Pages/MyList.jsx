import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyTouristSpotCard from '../MyTouristSpotCard/MyTouristSpotCard';

const MyList = () => {
    const loadedSpots = useLoaderData();  // লোড করা ডেটা
    const [spots, setSpots] = useState(loadedSpots);

    // ডিলিট করার জন্য ফাংশন
    const handleDelete = (_id) => {
        // স্পটটি ফিল্টার করে বাদ দেওয়া
        setSpots(spots.filter(spot => spot._id !== _id));
    };

    return (
        <div>
            <h1 className="text-9xl text-center">আমার পর্যটন স্পটের তালিকা</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-2 p-4 lg:px-1">
                {
                    spots.map(spot => (
                        <MyTouristSpotCard
                            key={spot._id}
                            spot={spot}
                            onDelete={handleDelete}  // ডিলিট ফাংশন পাস করা হচ্ছে
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MyList;
