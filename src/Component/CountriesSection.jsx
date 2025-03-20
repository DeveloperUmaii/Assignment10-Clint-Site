import React from "react";
import { NavLink } from "react-router-dom";

const countries = [
    {
        id: '0',
        name: "Bangladesh",
        flag: "https://i.ibb.co.com/NnnMcZqx/Bangladesh.jpg",
        description: "Bangladesh is a land of natural beauty, historical landmarks, and cultural heritage. From the stunning Cox’s Bazar beach to the Sundarbans mangrove forest, it offers attractions for every traveler.",
    },
    {
        id: '1',
        name: "Thailand",
        flag: "https://i.ibb.co.com/KxHhDDsY/Indunesia.jpg",
        description: "Thailand is a vibrant tourist destination known for its stunning beaches, rich culture, and delicious cuisine. From Bangkok’s temples to Phuket’s islands, it offers unforgettable experiences.",
    },
    {
        id: '2',
        name: "Indunesia",
        flag: "https://i.ibb.co.com/0p4mD6fn/Indunesiaa.jpg",
        description: "Indonesia is a diverse tourist paradise with beautiful beaches, volcanoes, and rich cultural heritage. From Bali’s serene landscapes to Jakarta’s vibrant city life, it offers endless adventures.",
    },
    {
        id: '3',
        name: "Malaysia",
        flag: "https://i.ibb.co.com/mrmqJ3ct/Malaysia.jpg",
        description: "Malaysia is a diverse tourist destination with modern cities, tropical islands, and rich cultural heritage. From Kuala Lumpur’s skyscrapers to Langkawi’s beaches, it offers unforgettable experiences."
    },
     {
        id: '4',
        name: "Combodia",
        flag: "https://i.ibb.co.com/5xtFM6JF/Combodia.jpg",
        description: "Cambodia is a fascinating tourist destination known for its ancient temples, rich history, and natural beauty. From Angkor Wat to pristine beaches, it offers unforgettable experiences.",
    },   
    {
        id: '5',
        name: "Veitnam",
        flag: "https://i.ibb.co.com/HT943GYX/Veitnam.jpg",
        description: "Vietnam is a stunning tourist destination known for its natural beauty, rich history, and delicious cuisine. From Ha Long Bay to Hanoi’s old quarters, it offers unforgettable experiences.",
    },
];

const CountriesSection = () => {
    return (
        <div className="p-8 ">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Countries</h2>
            <div className="grid md:grid-cols-3 gap-6 ">
                {countries.map((country, index) => (
                    <NavLink key={index} to={`/CountriesSpeacialSpot/${index}`}>
                        <div className="border rounded-lg shadow-lg p-4 bg-white hover:scale-105">
                            <img src={country.flag} alt={country.name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold">{country.name}</h3>
                            <p className="text-gray-600 mt-2">{country.description}</p>
                        </div>
                    </NavLink>
                ))}

            </div>
        </div>
    );
};

export default CountriesSection;
