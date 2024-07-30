import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentScreen = () => {
    const [paymentDetails, setPaymentDetails] = useState({ customerId: '', amount: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    };

    const handlePayment = () => {
        axios.post('/api/payment', paymentDetails)
            .then(response => {
                // Handle successful payment
                console.log(response.data);
                navigate('/invoice', { state: { payment: response.data.payment } });
            })
            .catch(error => {
                // Handle payment error
                console.error(error);
            });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Payment</Typography>
            <Box mb={2}>
                <TextField
                    label="Customer ID"
                    name="customerId"
                    value={paymentDetails.customerId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Amount"
                    name="amount"
                    type="number"
                    value={paymentDetails.amount}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            </Box>
            <Button variant="contained" color="primary" onClick={handlePayment}>
                Process Payment
            </Button>
        </Container>
    );
};

export default PaymentScreen;
