import React from 'react';
import Swal from 'sweetalert2';

const MyTouristSpotCard = ({ spot, onDelete }) => {
    const { _id, image, SpotName } = spot;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            text: "এটি মুছে ফেলার পর ফিরে আসা যাবে না!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "হ্যাঁ, মুছে ফেলুন!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spot/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "মুছে ফেলা হয়েছে!",
                            text: "আপনার তথ্য মুছে ফেলা হয়েছে।",
                            icon: "success"
                        });

                        // ** প্যারেন্ট কম্পোনেন্টে স্টেট আপডেট করা**
                        onDelete(_id);  // ডিলিট ফাংশন কল করা
                    }
                });
            }
        });
    };

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt={SpotName}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-green-500 font-extrabold">My Tourist Spot Card</h2>
                    <h2 className="card-title">{SpotName}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-[#1efc1e] border-none">Update</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-[#ff0b0b] border-none">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTouristSpotCard;
