import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyTouristSpotCard = ({ spot, onDelete }) => {
    const { _id, image, SpotName, TravelTime, Visitors, Cost } = spot; //Step-04

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            text: "এটি মুছে ফেলার পর ফিরে আসা যাবে না!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "হ্যাঁ, মুছে ফেলুন!"
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/spot/${_id}`, {
                    method: "DELETE",
                });

                const data = await response.json();

                if (data.result.deletedCount > 0) {
                    console.log("Spot deleted successfully:", _id);
                    onDelete(_id); // ✅ UI থেকে সরানোর জন্য ফাংশন কল করা হচ্ছে

                    await Swal.fire({
                        title: "মুছে ফেলা হয়েছে!",
                        text: "আপনার তথ্য মুছে ফেলা হয়েছে।",
                        icon: "success",
                    });
                }
            } catch (error) {
                console.error("Error deleting spot:", error);
            }
        }
    };

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img src={image} alt={SpotName} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-green-500 font-extrabold">My Tourist Spot Card</h2>
                <h2 className="card-title">{SpotName}</h2>   {/*Step-05*/} 
                <h2 className="card-title">{TravelTime}</h2> {/*Step-05*/}      
                <h2 className="card-title">{Visitors}</h2>   {/*Step-05*/}      
                <h2 className="card-title">{Cost}</h2>       {/*Step-05*/}     
                <div className="card-actions">
                    <Link to={`SpotUpdate/${_id}`} className="btn btn-primary bg-[#1efc1e] border-none">Update</Link>
                    <button onClick={handleDelete} className="btn btn-primary bg-[#ff0b0b] border-none">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyTouristSpotCard;
