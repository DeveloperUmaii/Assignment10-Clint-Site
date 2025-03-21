import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SpotUpdate = () => {
    const loadedSpot = useLoaderData();
    const [spot, setSpot] = useState(loadedSpot);
    const navigate = useNavigate();

    const handleUpdateButton = (event) => {
        event.preventDefault();
        const form = event.target;

        const updatedData = {
            image: form.image.value,
            SpotName: form.SpotName.value,
            Country: form.Country.value,
            location: form.location.value,
            Season: form.Season.value,
            TravelTime: form.TravelTime.value,
            Visitors: form.Visitors.value,
            Description: form.Description.value,
            Cost: form.Cost.value,
        };

        // ✅ PUT Request পাঠানো
        fetch(`http://localhost:5000/SpotUpdate/${spot._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    // ✅ Update সফল হলে SweetAlert দেখানো
                    Swal.fire({
                        title: "Updated Successfully!",
                        text: "Tourist spot has been updated.",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(() => {
                        navigate("/MyList"); // ✅ সফল হলে হোমপেজে পাঠানো
                    });
                }
            })
            .catch((error) => {
                console.error("Update Failed:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update tourist spot.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Update Tourist Spot</h1>
            <h2 className="text-xl font-semibold text-gray-600 mb-6">Spot Name: {spot.SpotName}</h2>

            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
                <form onSubmit={handleUpdateButton} className="space-y-4">
                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label font-semibold">Image URL</label>
                        <input type="url" name="image" defaultValue={spot.image} className="input input-bordered w-full" />
                    </div>

                    {/* Spot Name */}
                    <div className="form-control">
                        <label className="label font-semibold">Tourist Spot Name</label>
                        <input type="text" name="SpotName" defaultValue={spot.SpotName} className="input input-bordered w-full" />
                    </div>

                    {/* Country */}
                    <div className="form-control">
                        <label className="label font-semibold">Country</label>
                        <input type="text" name="Country" defaultValue={spot.Country} className="input input-bordered w-full" />
                    </div>

                    {/* Location */}
                    <div className="form-control">
                        <label className="label font-semibold">Location</label>
                        <input type="text" name="location" defaultValue={spot.location} className="input input-bordered w-full" />
                    </div>

                    {/* Season */}
                    <div className="form-control">
                        <label className="label font-semibold">Best Season</label>
                        <input type="text" name="Season" defaultValue={spot.Season} className="input input-bordered w-full" />
                    </div>

                    {/* Travel Time */}
                    <div className="form-control">
                        <label className="label font-semibold">Travel Time</label>
                        <input type="text" name="TravelTime" defaultValue={spot.TravelTime} className="input input-bordered w-full" />
                    </div>

                    {/* Visitors */}
                    <div className="form-control">
                        <label className="label font-semibold">Visitors per Year</label>
                        <input type="text" name="Visitors" defaultValue={spot.Visitors} className="input input-bordered w-full" />
                    </div>

                    {/* Cost */}
                    <div className="form-control">
                        <label className="label font-semibold">Cost (in USD)</label>
                        <input type="text" name="Cost" defaultValue={spot.Cost} className="input input-bordered w-full" />
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label font-semibold">Description</label>
                        <textarea name="Description" defaultValue={spot.Description} className="textarea textarea-bordered w-full"></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="btn btn-primary btn-wide bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg">
                            Update Spot
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpotUpdate;
