import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar bg-neutral-900	text-white text-1xl'>
            <nav className='py-3'>
                <Link className='mx-5 hover:bg-red-500 p-2 rounded transition-all' to = '/home'>Home</Link>
                <Link className='mx-5 hover:bg-red-500 p-2 rounded transition-all' to = '/reviews'>Reviews</Link>
                <Link className='mx-5 hover:bg-red-500 p-2 rounded transition-all' to = '/dashboard'>Dashboard</Link>
                <Link className='mx-5 hover:bg-red-500 p-2 rounded transition-all' to = '/blogs'>Blogs</Link>
                <Link className='mx-5 hover:bg-red-500 p-2 rounded transition-all' to = '/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;