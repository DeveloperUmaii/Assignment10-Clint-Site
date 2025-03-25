import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-6 px-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-yellow-500">Cox-Tourism</h2>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Cox-Tourism. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 text-2xl hover:text-red-600">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-600">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
