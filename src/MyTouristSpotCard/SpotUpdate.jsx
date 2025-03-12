import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SpotUpdate = () => {
    const loadedSpot = useLoaderData();
    const [spot, setSpot] = useState(loadedSpot);
    const navigate = useNavigate();

    const { _id, image, SpotName, Country } = spot; 

    const handleUpdateButton = event => {
        event.preventDefault();

        const form = event.target;
        const Updatedimage = form.UpdatedimageUrl.value;
        const UpdatedSpotName = form.UpdatedTouristSpotName.value;
        const UpdatedSpotCountry = form.UpdatedTouristSpotCountry.value;
        const UpdatedTouristSpot = { Updatedimage, UpdatedSpotName, UpdatedSpotCountry };

   
// console.log("🔍 Data Sending to API:", UpdatedTouristSpot);

fetch(`http://localhost:5000/spot/${_id}`, {  // ✅ এখানে _id আছে তো?

    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(UpdatedTouristSpot)
})
        .then(res => res.json())
        .then(data => {
            if (data) {
                setSpot({
                    ...spot,
                    image: data.image, // ✅ UI-তে নতুন আপডেট হওয়া ডাটা সেট করা
                    SpotName: data.SpotName,
                    Country: data.Country

                });

                Swal.fire({
                    title: "SUCCESSFUL!",
                    text: "Spot Updated successfully!",
                    icon: "success",
                    confirmButtonText: 'Done'
                }).then(() => {
                    navigate('/MyList'); // ✅ আপডেট হওয়ার পর MyList পেজে পাঠাবে
                });
            } else {
                // console.log('⚠️ Update failed.');
                // console.log("🔍 Updating Spot ID:", _id);
            }
        })
        .catch(err => {
            console.error('❌ Update Error:', err);
        });
    };

    return (
        <div>
            <h1 className="text-4xl">Update</h1>
            <h1 className="text-2xl">Spotname : {SpotName}</h1>
            <h1 className="text-4xl text-center">Update-tourist-Spot</h1>
            <div className="border border-[#a932ee] flex justify-center">
                <form onSubmit={handleUpdateButton} className='w-6/12 py-20'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type='url' name='UpdatedimageUrl' defaultValue={image} placeholder="image Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input type='text' name='UpdatedTouristSpotName' defaultValue={SpotName} placeholder="Tourist Spot Name" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Spot Country Name</span>
                        </label>
                        <input type='text' name='UpdatedTouristSpotCountry' defaultValue={Country} placeholder="Tourist Spot Country Name" className="input input-bordered" />
                    </div>

                    <input type='submit' value='Update Value' className="border-none bg-[#000000] flex justify-center btn btn-outline btn-warning w-5/12" />
                </form>
            </div>
        </div>
    );
};

export default SpotUpdate;
