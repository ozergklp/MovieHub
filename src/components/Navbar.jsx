import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Search from './Search';


const Navbar = () => {
    return (
        <>
        <nav className= 'p-4  fixed top-0 left-0 right-0 z-50 bg-green-300'>
            <ul className='flex flex-col md:flex-row'>
                <li className='flex-1'>
                    <h2>
                        <Link  to="/">MovieHub</Link>
                    </h2>
                </li>
                <li>
                    <Link className='mr-5' to="/now-playing">Now Playing</Link>
                </li>
                <li>
                    <Link className='mr-5' to="/popular">Popular</Link>
                </li>
                <li>
                    <Link className='mr-5' to="/top-rated">Top Rated</Link>
                </li>
                <li>
                    <Link className='mr-5' to="/upcoming">Upcoming</Link>
                </li>
                <li>
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
