import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddtouristSpot = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; // ✅ আগের লোকেশন না থাকলে "/MyList" এ যাবে

    const handleAddButon = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.imageUrl.value;
        const SpotName = form.TouristSpotName.value;
        const Country = form.TouristSpotCountry.value;
        const Location = form.Location.value;
        const Season = form.Season.value;
        const TravelTime = form.TravelTime.value;
        const Visitors = form.Visitors.value;
        const Description = form.Description.value;
        const Cost = form.Cost.value;

        const TouristSpot = { image, SpotName, Country, Location, Season, TravelTime, Visitors, Description, Cost };

        fetch('https://cox-tourism-global-server.vercel.app/spot', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(TouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    Swal.fire({
                        title: "SUCCESSFUL!",
                        text: "Data successfully Submitted!",
                        icon: "success",
                        confirmButtonText: 'Done'
                    }).then(() => navigate(from, { replace: true }));
                }
            })
            .catch(err => console.error('❌ ডাটা পাঠাতে সমস্যা হয়েছে:', err));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg border border-gray-200">
                <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Add a New Tourist Spot</h1>
                <form onSubmit={handleAddButon} className="space-y-5">
                    
                    <div className="form-control">
                        <label className="label">Image URL</label>
                        <input type='url' name='imageUrl' placeholder="Enter Image URL" className="input input-bordered w-full" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">Tourist Spot Name</label>
                            <input type='text' name='TouristSpotName' placeholder="Spot Name" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label">Country</label>
                            <input type='text' name='TouristSpotCountry' placeholder="Country Name" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">Location</label>
                            <input type='text' name='Location' placeholder="Location" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label">Season</label>
                            <input type='text' name='Season' placeholder="Best Season" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">Travel Time</label>
                            <input type='text' name='TravelTime' placeholder="Travel Duration" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label">Visitors</label>
                            <input type='text' name='Visitors' placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">Description</label>
                        <textarea name='Description' placeholder="Write a short description" className="textarea textarea-bordered w-full"></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">Average Cost</label>
                        <input type='text' name='Cost' placeholder="Estimated Cost" className="input input-bordered w-full" />
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="btn btn-success w-1/2 text-lg font-bold">Add Spot</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddtouristSpot;
