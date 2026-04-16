import React from 'react';
import { HiHome } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    // Common class for nav links to avoid repetition
    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-xl transition-colors duration-200 ${isActive
            ? "bg-green-800 text-white"
            : "text-base-content hover:bg-base-200"
        }`;

    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-base-100 shadow-sm navbar px-4 lg:px-8">
                <div className="navbar-start">
                    {/* Logo */}
                    <a className="btn btn-ghost text-xl font-bold normal-case">
                        Keen<span className='text-green-800'>Keeper</span>
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <NavLink to="/" className={linkClass}>
                                <HiHome /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/timeline" className={linkClass}>
                                <IoMdTime /> Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/stats" className={linkClass}>
                                <TfiStatsUp /> Stats
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink to="/" className={linkClass}>
                                    <HiHome /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/timeline" className={linkClass}>
                                    <IoMdTime /> Timeline
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stats" className={linkClass}>
                                    <TfiStatsUp /> Stats
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;