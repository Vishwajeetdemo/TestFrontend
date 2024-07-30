import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const InvoiceScreen = () => {
    const location = useLocation();
    const { customerDetails, payment } = location.state || {};

    const calculateTotal = () => {
        const days = Math.ceil((new Date(customerDetails.checkOutDate) - new Date(customerDetails.checkInDate)) / (1000 * 60 * 60 * 24));
        const tax = customerDetails.roomRent * 0.18;
        const total = customerDetails.roomRent * days + tax;
        return { days, tax, total };
    };

    const { days, tax, total } = calculateTotal();

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Invoice</Typography>
            <Box mb={2}>
                <Typography>Name: {customerDetails.name}</Typography>
                <Typography>Email: {customerDetails.email}</Typography>
                <Typography>Phone: {customerDetails.phone}</Typography>
                <Typography>Check-In Date: {customerDetails.checkInDate}</Typography>
                <Typography>Check-Out Date: {customerDetails.checkOutDate}</Typography>
                <Typography>Room Rent: {customerDetails.roomRent}</Typography>
                <Typography>Days Stayed: {days}</Typography>
                <Typography>Tax: {tax}</Typography>
                <Typography>Total Amount: {total}</Typography>
                {payment  && (
                    <Box mt={4}>
                        <Typography variant="h6">Payment Details</Typography>
                        <Typography>Amount: {payment.amount}</Typography>
                        <Typography>Status: {payment.status}</Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default InvoiceScreen;
