import React from 'react';
import Swal from 'sweetalert2';

const AddtouristSpot = () => {

    //handleAddButon এর মাধ্যমে ফ্রন্ট এন্ড পাঠাইলাম এরপর ব্যাক এন্ড পাঠিয়ে পাঠাইতে হইবো
    const handleAddButon = event => {
        event.preventDefault(); //যাতে পেজটা বারবার রিলোড না হয়

        const form = event.target; //ফর্মের সব ভ্যালু form রাখা হলো
        const image = form.imageUrl.value; //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: name
        const SpotName = form.TouristSpotName.value;   //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: image Url
        const Country = form.TouristSpotCountry.value; //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: image Url
        const Location = form.Location.value;       //Step-o1 //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: image Url
        const Season = form.Season.value;           //Step-o1 //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: image Url
        const TravelTime = form.TravelTime.value;   //Step-o1 //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: image Url
        const Visitors = form.Visitors.value;       //Step-o1 //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: image Url
        const Description = form.Description.value; //Step-o1 //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: image Url
        const Cost = form.Cost.value;               //Step-o1 //ফর্ম থেকে একটা একটা করে ভ্যালু  আনা হচ্ছে, যেমন: image Url

        // const TouristSpot = { image, SpotName, Country }; //Step-2
        const TouristSpot = { image, SpotName, Country, Location, Season, TravelTime, Visitors, Description, Cost }; //Step-2
        console.log(TouristSpot);


        // আগে সার্ভার সাইট থেকে ডাটা রিসিভ করেছি এখন ক্লায়েন্ট সাইট থেকে ডাটা পাঠাবো
        //Must POST Api হিট করার জন্য মেথড বলে দিতে হবে
        //Must কি ধরনের ডাটা পাঠাচ্ছি 
        fetch('http://localhost:5000/spot', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ image, SpotName, Country })
            body: JSON.stringify({ image, SpotName, Country, Location, Season, TravelTime, Visitors, Description, Cost }) //Step-3
            // body: JSON.stringify({ name: "Cox's Bazar", location: "Bangladesh" })
        })
            .then(res => res.json())
            .then(data => {
                console.log('📢 Received Data:', data); // ডাটা কনসোল লগ করো



                if (data?.insertedId) {
                    Swal.fire({
                        title: "SUCCESSFUL!",
                        text: "Data successfully Submitted!",
                        icon: "success",
                        confirmButtonText: 'Done'
                    });
                } else {
                    console.log('⚠️ কোনো insertedId পাওয়া যায়নি!');
                }
            })
            .catch(err => {
                console.error('❌ ডাটা আনতে সমস্যা হয়েছে:', err);
            });

    }

    return (
        <div>
            <h1 className="text-4xl text-center">Add-tourist-Spot</h1>
            <div className=" border border-[#ee3232]  flex justify-center ">
                {/* দেশ, লোকেশন, বিবরণ, খরচ, কতজন যায়, সিজন, ট্রাভেল টাইম, details  */}
                <form onSubmit={handleAddButon} className='w-6/12 py-20'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type='url' name='imageUrl' placeholder="image Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input type='text' name='TouristSpotName' placeholder="Tourist Spot Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input type='text' name='TouristSpotCountry' placeholder="C  O  U  N  T  R  Y" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type='text' name='Location' placeholder="L   O   C   A   T   I   O   N" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Season</span>
                        </label>
                        <input type='text' name='Season' placeholder="S   E   A   S   O   N" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input type='text' name='TravelTime' placeholder="T  R  A  V  E  L      T  I  M  E" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input type='text' name='Visitors' placeholder="V I S I T O R S  /  Y E A R" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type='text' name='Description' placeholder="D I S C R I P T I O N" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input type='text' name='Cost' placeholder="C  O  S  T" className="input input-bordered" />
                    </div>



                    <input type='submit' value='Add Value' className=" bg-[#ffa43514] flex justify-center btn btn-outline btn-warning w-5/12 " />

                </form>
            </div>
        </div>
    );
};

export default AddtouristSpot;