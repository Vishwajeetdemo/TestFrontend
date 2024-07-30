import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Container className="header-container">
                    <Typography variant="h6" className="logo">
                        Hotel Management
                    </Typography>
                    <div className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/check-in" className="nav-link">Check-In</Link>
                        <Link to="/check-out" className="nav-link">Check-Out</Link>
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
