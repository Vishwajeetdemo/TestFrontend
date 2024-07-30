import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckInScreen = () => {
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        email: '',
        phone: '',
        idProof: '',
        address: '',
        checkInDate: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
    };

    const handleCheckIn = async () => {
        try {
            await axios.post('/api/checkin', customerDetails);
            navigate('/');
        } catch (error) {
            console.error("There was an error checking in!", error);
            setError("Failed to check in. Please try again.");
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Check-In</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <Box mb={2}>
                <TextField
                    label="Name"
                    name="name"
                    value={customerDetails.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={customerDetails.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={customerDetails.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="ID Proof"
                    name="idProof"
                    value={customerDetails.idProof}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Address"
                    name="address"
                    value={customerDetails.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Check-In Date"
                    name="checkInDate"
                    type="date"
                    value={customerDetails.checkInDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Button variant="contained" color="primary" onClick={handleCheckIn}>
                Check-In
            </Button>
        </Container>
    );
};

export default CheckInScreen;
