// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=' border-2 border-green-800 p-8 font-bold flex justify-center gap-20'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/all-users' className='nav-link'>Dashboard</Link>
            <Link to='/create-user' className='nav-link'>Create User</Link>
        </nav>
    );
};

export default Navbar;