import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyTouristSpotCard = ({ spot, onDelete }) => {
    const { _id, image, SpotName, TravelTime, Visitors, Cost } = spot;

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "It can't be recover once it's deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, DELETE!"
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/spot/${_id}`, {
                    method: "DELETE",
                });

                const data = await response.json();

                if (data.result.deletedCount > 0) {
                    console.log("Spot deleted successfully:", _id);
                    onDelete(_id);

                    await Swal.fire({
                        title: "Deleted!",
                        text: "Your spot data succesfully deleted",
                        icon: "success",
                    });
                }
            } catch (error) {
                console.error("Error deleting spot:", error);
            }
        }
    };

    return (
        <div className="card w-96 bg-white shadow-xl rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <figure className="px-6 pt-6">
                <img src={image} alt={SpotName} className="rounded-lg w-full h-48 object-cover" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-green-600">{SpotName}</h2>
                <p className="text-gray-600"><strong>Travel Time:</strong> {TravelTime}</p>
                <p className="text-gray-600"><strong>Visitors:</strong> {Visitors}</p>
                <p className="text-gray-600"><strong>Cost:</strong> {Cost} </p>
                <div className="card-actions mt-4 flex justify-center">
                    <Link to={`SpotUpdate/${_id}`} className="btn btn-success px-4 py-2 rounded-md transition hover:bg-green-700">
                        Update
                    </Link>
                    <button onClick={handleDelete} className="btn btn-error px-4 py-2 rounded-md transition hover:bg-red-700">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyTouristSpotCard;
