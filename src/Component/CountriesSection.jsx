import React from "react";
import { NavLink } from "react-router-dom";

const countries = [
    {
        id: '01',
        name: "Bangladesh",
        flag: "https://i.ibb.co.com/NnnMcZqx/Bangladesh.jpg",
        description: "Thailand is known for its tropical beaches, royal palaces, ancient ruins, and ornate temples displaying figures of Buddha.",
    },
    {
        id: '02',
        name: "Thailand",
        flag: "https://i.ibb.co.com/KxHhDDsY/Indunesia.jpg",
        description: "Italy is home to the world's greatest art, architecture, and delicious cuisine, including pasta and pizza.",
    },
    {
        id: '03',
        name: "Indunesia",
        flag: "https://i.ibb.co.com/0p4mD6fn/Indunesiaa.jpg",
        description: "Egypt is famous for its ancient civilization, pyramids, Sphinx, and Nile River, making it a top travel destination.",
    },
    {
        id: '04',
        name: "Combodia",
        flag: "https://i.ibb.co.com/5xtFM6JF/Combodia.jpg",
        description: "Thailand is known for its tropical beaches, royal palaces, ancient ruins, and ornate temples displaying figures of Buddha.",
    },
    {
        id: '05',
        name: "Malaysia",
        flag: "https://i.ibb.co.com/mrmqJ3ct/Malaysia.jpg",
        description: "Italy is home to the world's greatest art, architecture, and delicious cuisine, including pasta and pizza.",
    },
    {
        id: '06',
        name: "Veitnam",
        flag: "https://i.ibb.co.com/HT943GYX/Veitnam.jpg",
        description: "Egypt is famous for its ancient civilization, pyramids, Sphinx, and Nile River, making it a top travel destination.",
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
