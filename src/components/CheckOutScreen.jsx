import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CheckOutScreen.css';

const CheckOutScreen = () => {
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        email: '',
        phone: '',
        idProof: '',
        address: '',
        checkInDate: '',
        checkOutDate: '',
        roomRent: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
    };

    const handleCheckOut = async () => {
        try {
            await axios.post('/api/checkout', customerDetails);
            navigate('/invoice', { state: { customerDetails } });
        } catch (error) {
            console.error("There was an error checking out!", error);
            setError("Failed to check out. Please try again.");
        }
    };

    return (
        <Container className="container">
            <Typography variant="h4" gutterBottom className="heading">Check-Out</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <Box mb={2}>
                <TextField
                    label="Name"
                    name="name"
                    value={customerDetails.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="input"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={customerDetails.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="input"
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={customerDetails.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="input"
                />
                <TextField
                    label="ID Proof"
                    name="idProof"
                    value={customerDetails.idProof}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="input"
                />
                <TextField
                    label="Address"
                    name="address"
                    value={customerDetails.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="input"
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
                    className="input"
                />
                <TextField
                    label="Check-Out Date"
                    name="checkOutDate"
                    type="date"
                    value={customerDetails.checkOutDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    className="input"
                />
                <TextField
                    label="Room Rent"
                    name="roomRent"
                    value={customerDetails.roomRent}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="input"
                />
            </Box>
            <Button
                variant="contained"
                color="primary"
                onClick={handleCheckOut}
                className="button"
            >
                Check-Out
            </Button>
        </Container>
    );
};

export default CheckOutScreen;
