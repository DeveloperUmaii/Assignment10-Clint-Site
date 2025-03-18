import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SpotUpdate = () => {
    const loadedSpot = useLoaderData();
    const [spot, setSpot] = useState(loadedSpot);
    const navigate = useNavigate();

    const { _id, image, SpotName, Country, location, Season, TravelTime, Visitors, Description, Cost } = spot;

    const handleUpdateButton = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const UpdatedTouristSpot = Object.fromEntries(formData.entries());

        fetch(`http://localhost:5000/spot/${_id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(UpdatedTouristSpot)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                Swal.fire({
                    title: "SUCCESSFUL!",
                    text: "Spot Updated successfully!",
                    icon: "success",
                    confirmButtonText: 'Done'
                }).then(() => navigate('/MyList'));
            }
        })
        .catch(err => console.error('❌ Update Error:', err));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#668df886] to-[#02fab06c] flex justify-center items-center">
            <div className="w-11/12 md:w-3/5 lg:w-2/5 p-8 bg-white shadow-2xl rounded-xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Tourist Spot</h1>
                <form onSubmit={handleUpdateButton} className="space-y-4">
                    <input type='url' name='image' defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                    <input type='text' name='SpotName' defaultValue={SpotName} placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                    <input type='text' name='Country' defaultValue={Country} placeholder="Country" className="input input-bordered w-full" />
                    <input type='text' name='location' defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                    <input type='text' name='Season' defaultValue={Season} placeholder="Best Season" className="input input-bordered w-full" />
                    <input type='text' name='TravelTime' defaultValue={TravelTime} placeholder="Travel Time" className="input input-bordered w-full" />
                    <input type='text' name='Visitors' defaultValue={Visitors} placeholder="Visitors Per Year" className="input input-bordered w-full" />
                    <input type='text' name='Cost' defaultValue={Cost} placeholder="Estimated Cost" className="input input-bordered w-full" />
                    <textarea name='Description' defaultValue={Description} placeholder="Description" className="textarea textarea-bordered w-full"></textarea>
                    <button type='submit' className="btn bg-indigo-600 text-white w-full hover:bg-indigo-700">Update Spot</button>
                </form>
            </div>
        </div>
    );
};

export default SpotUpdate;