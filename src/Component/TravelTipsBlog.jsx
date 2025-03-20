import React, { useState } from "react";

const travelBlogs = [
  {
    title: "10 Essential Travel Tips for Beginners",
    image: "https://i.ibb.co.com/HDd2rVct/Gemini-Generated-Image-lo3ejilo3ejilo3e.jpg",
    description: "Learn the most important travel tips that every beginner should know before planning their trip.",
    details: "These travel tips will help you save money, avoid common mistakes, and have a stress-free journey."
  },
  {
    title: "How to Save Money While Traveling",
    image: "https://i.ibb.co.com/JRBbsKyX/Gemini-Generated-Image-8kxvpt8kxvpt8kxv.jpg",
    description: "Discover the best ways to save money while exploring new destinations around the world.",
    details: "From budget-friendly accommodation to cheap flights, learn the best ways to save money on your trips."
  },
  {
    title: "Best Packing Hacks for Stress-Free Travel",
    image: "https://i.ibb.co.com/dYpQqD4/Gemini-Generated-Image-dad3xadad3xadad3.jpg",
    description: "Get expert packing tips that will make your trips smoother and hassle-free.",
    details: "Learn how to pack smart, use space-saving techniques, and avoid overpacking."
  },
];

const TravelTipsBlog = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Travel Tips & Blog</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {travelBlogs.map((blog, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 bg-white">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.description}</p>

            {/* Collapsible Content */}
            {openIndex === index && (
              <div className="  collapse collapse-open   pt-0 rounded-lg text-start">
                <p className="text-gray-700">{blog.details}</p>
              </div>
            )}

            {/* Toggle Button */}
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700  w-full"  //mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700
              onClick={() => toggleCollapse(index)}
            >
              {openIndex === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTipsBlog;
