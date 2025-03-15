import React from 'react';
import { NavLink } from 'react-router-dom';

const AllTouristSpotCard = ({spot}) => {
    const {_id, image, SpotName} = spot;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={spot?.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title text-red-500 font-extrabold">All Tourist Spot Card</h2>
                    <h2 className="card-title">{spot?.SpotName}</h2>
                    <div className="card-actions">
                        <NavLink to={`Details/${_id}`} className="btn btn-primary">Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTouristSpotCard;