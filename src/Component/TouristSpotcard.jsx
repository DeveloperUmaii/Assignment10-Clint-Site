

const TouristSpotcard = ({spot}) => {

const {image, SpotName} = spot;
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
                    <h2 className="card-title">{spot?.SpotName}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotcard;