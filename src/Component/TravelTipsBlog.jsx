import React from "react";

const travelBlogs = [
  {
    title: "10 Essential Travel Tips for Beginners",
    image: "https://source.unsplash.com/400x300/?travel",
    description: "Learn the most important travel tips that every beginner should know before planning their trip.",
  },
  {
    title: "How to Save Money While Traveling",
    image: "https://source.unsplash.com/400x300/?money,travel",
    description: "Discover the best ways to save money while exploring new destinations around the world.",
  },
  {
    title: "Best Packing Hacks for Stress-Free Travel",
    image: "https://source.unsplash.com/400x300/?packing",
    description: "Get expert packing tips that will make your trips smoother and hassle-free.",
  },
];

const TravelTipsBlog = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Travel Tips & Blog</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {travelBlogs.map((blog, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 bg-white">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTipsBlog;
