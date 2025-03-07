import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTouristSpotCard from '../AllTouristSpotCard/AllTouristSpotCard';

const AlltouristSpot = () => {
    const spots = useLoaderData();
    return (
        <>
            <h1 className='text-9xl'>All-tourist-Spot count: {spots?.length}</h1>
            {
                spots.map(spot => <AllTouristSpotCard
                     key={spot?._id}
                     spot={spot}
                     ></AllTouristSpotCard>)
            }
        </>
    );
};

export default AlltouristSpot;