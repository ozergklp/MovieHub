import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Search from './Search';


const Navbar = () => {
    return (
        <>
        <nav className= 'p-4 fixed top-0 left-0 right-0 z-50 bg-white shadow-md  '>
            <ul className='grid place-items-center gap-3 md:flex md:flex-row items-center mx-20'>
                <li className='flex-1'>
                    <Link className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600' to="/">
                        MovieHub
                    </Link>
                </li>
                <li>
                    <Link   className='mr-5  text-blue-600 font-medium focus:font-bold text-lg bg-opacity-90' 
                            to="/now-playing">
                                Now Playing
                    </Link>
                </li>
                <li>
                    <Link className='mr-5  text-blue-600 font-medium focus:font-bold text-lg' to="/popular">Popular</Link>
                </li>
                <li>
                    <Link className='mr-5 text-blue-600 font-medium focus:font-bold text-lg' to="/top-rated">Top Rated</Link>
                </li>
                <li>
                    <Link className='mr-5 text-blue-600 font-medium focus:font-bold  text-lg' to="/upcoming">Upcoming</Link>
                </li>
                <li className='w-full sm:w-fit'>
                    <Search></Search>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
        </>
    );
};

export default Navbar;
