import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ManagementScreen.css';

const ManagementScreen = () => {
    const [rooms, setRooms] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/rooms').then(response => setRooms(response.data));
        axios.get('/api/facilities').then(response => setFacilities(response.data));
    }, []);

    return (
        <Container className="container">
            <Typography variant="h4" gutterBottom className="heading">Hotel Management</Typography>
            <Box mb={4}>
                <Typography variant="h6" className="subheading">Rooms</Typography>
                <List className="list">
                    {rooms.map(room => (
                        <ListItem key={room._id}>
                            <ListItemText primary={room.name} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box mb={4}>
                <Typography variant="h6" className="subheading">Facilities</Typography>
                <List className="list">
                    {facilities.map(facility => (
                        <ListItem key={facility._id}>
                            <ListItemText primary={facility.name} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Button variant="contained" color="primary" onClick={() => navigate('/check-in')} className="button">
                Check-In
            </Button>
            <Button variant="contained" color="secondary" onClick={() => navigate('/check-out')} className="button">
                Check-Out
            </Button>
        </Container>
    );
};

export default ManagementScreen;
