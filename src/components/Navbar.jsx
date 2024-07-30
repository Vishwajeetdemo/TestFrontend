import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar styling

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Management</Link></li>
                <li><Link to="/check-in">Check-In</Link></li>
                <li><Link to="/check-out">Check-Out</Link></li>
                <li><Link to="/invoice">Invoice</Link></li>
                <li><Link to="/payment">Payment</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
