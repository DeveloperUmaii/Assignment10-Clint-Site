import React from 'react';
import Nav from './Nav';
import { useLoaderData } from 'react-router-dom';
import TouristSpotcard from './TouristSpotcard';
import Slider from './Slider';


const Home = () => {
    const spots = useLoaderData();
    return (
     <div>
        {/* <h1 className='text-green-900 text-9xl'>H O M E </h1> */}
        <Slider></Slider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-2 lg:gap-2 p-2 px-1 ">
                {
                    spots.map(spot => <TouristSpotcard
                        key={spot?._id}
                        spot={spot}
                        ></TouristSpotcard>)
                }
          </div>

         

     </div>
    );
};

export default Home;