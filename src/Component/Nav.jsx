import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Pages/FirebaseConfig/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const { image, email, name, } = user;
  
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  
  };

  return (
    <nav className=" flex justify-between  bg-gray-900  text-white py-4 px-6 shadow-lg relative">
      <div className="">
        <NavLink to="/" className="text-2xl font-bold text-yellow-500">
          MyApp
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 mt-4 md:mt-0 ">
        <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"}>Home</NavLink>
        <NavLink to="/AlltouristSpot" className={({ isActive }) => isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"}>All Tourists Spot</NavLink>
        <NavLink to="/AddtouristSpot" className={({ isActive }) => isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"}>Add Tourists Spot</NavLink>
        <NavLink to="/MyList" className={({ isActive }) => isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"}>My List</NavLink>
      </div>



      {/* User Section */}
      <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
        {user ? (
          <div className="flex items-center space-x-3">
            <img
              src={user?.photoURL || "https://via.placeholder.com/40"}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-yellow-400"
            />
            <span className="text-sm font-medium">{user?.displayName || "User"}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex">
            <NavLink to="/Login" className="flex items-center space-x-2 text-yellow-400">
              <span>Please Log In</span>
            </NavLink>
            <NavLink to="/Register" className="flex items-center space-x-2 text-yellow-400">
              <span>/Register</span>
              <FaRegUserCircle className="text-2xl" />
            </NavLink>
          </div>
        )}
      </div>




      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
        {isOpen ? <FaTimes className="mb-52" /> : <FaBars />}
      </button>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#631d793f] flex flex-col items-center py-4 space-y-4 md:hidden">
          <NavLink to="/" className="text-white text-lg" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/AlltouristSpot" className="text-white text-lg" onClick={() => setIsOpen(false)}>All Tourists Spot</NavLink>
          <NavLink to="/AddtouristSpot" className="text-white text-lg" onClick={() => setIsOpen(false)}>Add Tourists Spot</NavLink>
          <NavLink to="/MyList" className="text-white text-lg" onClick={() => setIsOpen(false)}>My List</NavLink>
        </div>
      )}


    </nav>
  );
};

export default Navbar;