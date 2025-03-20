import { useParams } from "react-router-dom";

const touristSpots = {
    0: {
        countryName: "B  A  N  G  L  A  D  E  S  H", // ✅ নতুনভাবে দেশের নাম যোগ করা হলো
        spots: [
            {
                name: "Cox’s Bazar",
                image: "https://i.ibb.co.com/KpxrjWG1/cox-bazar.jpg",
                specialty: "World’s longest unbroken sandy sea beach.",
                bestSeason: "October to March"
            },
            {
                name: "Rangamati",
                image: "https://i.ibb.co.com/R4GSwdRh/rangamati.jpg",
                specialty: "Beautiful hill district with lakes and tribal culture.",
                bestSeason: "October to March"
            },
            {
                name: "Saint Martin’s Island",
                image: "https://i.ibb.co.com/XZsPwLzc/sintnartin.jpg",
                specialty: "Only coral island in Bangladesh with crystal-clear water.",
                bestSeason: "November to February"
            },
            {
                name: "Bandarban",
                image: "https://i.ibb.co.com/0Rry7Yqp/bandarban.jpg",
                specialty: "Scenic hill tracks, waterfalls, and tribal diversity.",
                bestSeason: "October to April"
            }
        ]
    },
    1: {
        countryName: "T  H  A  I  L  A  N  D", // ✅ নতুনভাবে দেশের নাম যোগ করা হলো
        spots: [
            {
                name: "Bangkok",
                image: "https://i.ibb.co.com/Qv4cW5Yf/BANGKOK.jpgs",
                specialty: "Vibrant capital city known for temples and nightlife.",
                bestSeason: "November to February"
            },
            {
                name: "Chiang Mai",
                image: "https://i.ibb.co.com/zH2Hj0hG/CHIANG-RAI.jpg",
                specialty: "Mountain city famous for ancient temples and culture.",
                bestSeason: "November to February"
            },
            {
                name: "Phuket",
                image: "https://i.ibb.co.com/DHBb6GMt/PHUKET.jpg",
                specialty: "Thailand’s largest island with stunning beaches.",
                bestSeason: "November to April"
            }
        ]
    },
    2: {
        countryName: "I  N  D  U  N  E  S  I  Y  A", // ✅ নতুনভাবে দেশের নাম যোগ করা হলো
        spots: [
            {
                name: "Bali",
                image: "https://i.ibb.co.com/dwYtFmRB/Bali.jpg",
                specialty: "Popular tourist island with beaches and temples.",
                bestSeason: "April to October"
            },
            {
                name: "Komodo National Park",
                image: "https://i.ibb.co.com/whrf240vKomodo-National-Parkjpg",
                specialty: "Home of the Komodo dragons and stunning nature.",
                bestSeason: "April to December"
            },
            {
                name: "Borobudur Temple",
                image: "https://i.ibb.co.com/kVRGp6Xj/Borobudur-Temple.jpg",
                specialty: "Largest Buddhist temple and UNESCO World Heritage Site.",
                bestSeason: "May to September"
            },
            {
                name: "Raja Ampat Islands",
                image: "https://i.ibb.co.com/qLzz95JN/Raja-Ampat.jpg",
                specialty: "Diver’s paradise with incredible marine biodiversity.",
                bestSeason: "October to April"
            }
        ]
    },
    3: {
        countryName: "M  A  L  A  Y  S  I  A", // ✅ নতুনভাবে দেশের নাম যোগ করা হলো
        spots: [
            {
                name: "Kuala Lumpur",
                image: "https://i.ibb.co.com/ks5R2crR/Kuala-Lumpur.jpg",
                specialty: "Malaysia’s capital city with iconic Petronas Towers.",
                bestSeason: "May to September"
            },
            {
                name: "Langkawi",
                image: "https://i.ibb.co.com/ks5R2crR/Kuala-Lumpur.jpg",
                specialty: "Island destination known for stunning beaches.",
                bestSeason: "November to April"
            },
            {
                name: "Penang",
                image: "https://i.ibb.co.com/8Lx5h8xs/Penang.jpg",
                specialty: "Cultural heritage and delicious street food.",
                bestSeason: "December to February"
            },
            {
                name: "Cameron Highlands",
                image: "https://i.ibb.co.com/xS1JTw6w/Cameron-Highlands.jpg",
                specialty: "Cool-weather tea plantations and scenic hills.",
                bestSeason: "March to September"
            }
        ]
    },
    4: {
        countryName: "V  I  E  T  N  A  M", // ✅ নতুনভাবে দেশের নাম যোগ করা হলো
        spots: [
            {
                name: "Ha Long Bay",
                image: "https://i.ibb.co.com/jkh1S0gs/Ha-Long-Bay.jpg",
                specialty: "UNESCO-listed site with limestone islands.",
                bestSeason: "October to April"
            },
            {
                name: "Ho Chi Minh City",
                image: "https://i.ibb.co.com/qL5fW1BV/Ho-Chi-Minh-City.jpg",
                specialty: "Vietnam’s economic hub with historic war sites.",
                bestSeason: "November to April"
            },
            {
                name: "Hoi An Ancient Town",
                image: "https://i.ibb.co.com/zh9cn7dL/Hoi-An-Ancient-Town.jpg",
                specialty: "Well-preserved old town with lantern-lit streets.",
                bestSeason: "February to July"
            },
            {
                name: "Phong Nha Caves",
                image: "https://i.ibb.co.com/vxTTp1fY/Phong.jpg",
                specialty: "One of the largest cave systems in the world.",
                bestSeason: "March to August"
            },
            {
                name: "Mekong Delta",
                image: "https://i.ibb.co.com/bRD6SShL/Mekong-Delta.jpg",
                specialty: "Scenic waterways and floating markets.",
                bestSeason: "November to April"
            }
        ]
    },
    5: {
        countryName: "C  A  M  B  O  D  I  A", // ✅ নতুনভাবে দেশের নাম যোগ করা হলো
        spots: [
            {
                name: "Angkor Wat",
                image: "https://i.ibb.co.com/FbZLBZZW/Angkor-Wat.jpg",
                specialty: "Largest religious monument and UNESCO site.",
                bestSeason: "November to February"
            },
            {
                name: "Siem Reap",
                image: "https://i.ibb.co.com/YFLCpjZK/Krong-Siem-Reap.jpg",
                specialty: "Gateway to Angkor Wat and vibrant nightlife.",
                bestSeason: "November to March"
            },
            {
                name: "Phnom Penh",
                image: "https://i.ibb.co.com/MD9d34LQ/Phnom-Penh.jpg",
                specialty: "Cambodia’s capital with Royal Palace and history.",
                bestSeason: "November to February"
            },
            {
                name: "Kep",
                image: "https://i.ibb.co.com/yGQ6Cq5/Kep.jpg",
                specialty: "Coastal town famous for fresh seafood.",
                bestSeason: "November to April"
            },
            {
                name: "Bokor National Park",
                image: "https://i.ibb.co.com/rKYczgHY/Preah-Monivong-Bokor-National-Park.jpg",
                specialty: "Mountainous park with abandoned colonial buildings.",
                bestSeason: "October to March"
            }
        ]
    }
};


const CountriesSpeacialSpot = () => {
    const { id } = useParams();
    const countryId = parseInt(id); // ✅ `id` কে সংখ্যা (integer) তে কনভার্ট করা হলো
    const countryData = touristSpots[countryId]; // ✅ সঠিকভাবে ডাটা এক্সেস করা হলো

    if (!countryData) {
        return <p className="text-center text-red-500 text-xl">No Tourist Spots Found</p>;
    }

    return (
        <div className="p-8">
            {/* ✅ সঠিকভাবে দেশের নাম দেখানোর জন্য পরিবর্তন করা হলো */}
            <h2 className="bg-[#ff090950] text-5xl font-bold text-center mb-6 text-red-600 pb-1">
                {countryData.countryName}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countryData.spots.length > 0 ? (
                    countryData.spots.map((spot, index) => (
                        <div key={index} className="border rounded-lg shadow-lg p-4 bg-white  transition-transform">
                            <img src={spot.image} alt={spot.name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold">{spot.name}</h3>
                            <p className="text-gray-600">🌍 {spot.specialty}</p>
                            <p className="text-blue-600 font-semibold">📅 Best Season: {spot.bestSeason}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-red-500">No Tourist Spots Found</p>
                )}
            </div>
        </div>
    );
};

export default CountriesSpeacialSpot;

