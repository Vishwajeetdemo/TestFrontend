import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ManagementScreen from './components/ManagementScreen';
import CheckInScreen from './components/CheckInScreen';
import CheckOutScreen from './components/CheckOutScreen';
import InvoiceScreen from './components/InvoiceScreen';
import './App.css'; // Ensure this file is created for global styles
import PaymentScreen from './components/PaymentScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ManagementScreen />} />
          <Route path="/check-in" element={<CheckInScreen />} />
          <Route path="/check-out" element={<CheckOutScreen />} />
          <Route path="/invoice" element={<InvoiceScreen />} />
          <Route path='/payment' element={<PaymentScreen/>} />
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
