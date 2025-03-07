import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='my-10'>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"
                }
            >
                Home
            </NavLink>

            <NavLink
                to='/AlltouristSpot'
                className={({ isActive }) => 
                    isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"
                }
            >
                All Tourists Spot
            </NavLink>

            <NavLink
                to='/AddtouristSpot'
                className={({ isActive }) => 
                    isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"
                }
            >
                Add Tourists Spot
            </NavLink>

            <NavLink
                to='/MyList'
                className={({ isActive }) => 
                    isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"
                }
            >
                My List
            </NavLink>

            <NavLink
                to='/Login'
                className={({ isActive }) => 
                    isActive ? " btn btn-outline btn-accent bg-[#093a3a] " : " btn btn-outline btn-accent"
                }
            >
                Login
            </NavLink>

            <NavLink
                to='/Register'
                className={({ isActive }) => 
                    isActive ? "btn btn-outline btn-accent bg-[#093a3a]" : "btn btn-outline btn-accent"
                }
            >
                Register
            </NavLink>
        </div>
    );
};

export default Nav;
