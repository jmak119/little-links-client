import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className={toggle ? 'header expanded' : 'header'}>
            <h2 className='logo'>Little Links</h2>
            <div className='toggle-icon' onClick={handleToggle}>
                {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
            </div>
            <ul className='links'>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/" className='link'>About Us</Link></li>
                <li><Link to="/" className='link'>Contact Us</Link></li>
                <li><Link to="/" className='link'>Sign Up / Log In</Link></li>
            </ul>
        </nav>
    )
}

export default Header;


