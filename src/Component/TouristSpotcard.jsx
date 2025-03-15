import { NavLink } from "react-router-dom";


const TouristSpotcard = ({spot}) => {

const {image, SpotName, _id} = spot;
    return (
        <div>
            <div className=" card bg-base-100 w-11/12 shadow-sm m-3 ">
                <figure className="px-10 pt-10">
                    <img
                        src={spot?.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{spot?.SpotName}</h2>
                    <div className="card-actions bottom-2">
                        <NavLink to={`Details/${_id}`} className=" btn btn-primary">Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotcard;