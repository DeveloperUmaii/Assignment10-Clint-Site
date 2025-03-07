import React from 'react';
import Nav from './Nav';
import { useLoaderData } from 'react-router-dom';
import TouristSpotcard from './TouristSpotcard';


const Home = () => {
    const spots = useLoaderData();
    return (
        <div>
            <h1 className='text-green-900 text-9xl'>H O M E </h1>
            {
                spots.map(spot => <TouristSpotcard
                    key={spot?._id}
                    spot={spot}
                    ></TouristSpotcard>)
            }
         

        </div>
    );
};

export default Home;