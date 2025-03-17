import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTouristSpotCard from '../AllTouristSpotCard/AllTouristSpotCard';

const AlltouristSpot = () => {
    const spots = useLoaderData();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-0 gap-y-2 lg:gap-2 p-2 ">
            {/* <h1 className='text-9xl'>All-tourist-Spot count: {spots?.length}</h1> */}
            {
                spots.map(spot => <AllTouristSpotCard
                     key={spot?._id}
                     spot={spot}
                     ></AllTouristSpotCard>)
            }
          </div>
    );
};

export default AlltouristSpot;