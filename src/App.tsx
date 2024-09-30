import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './signup/SignIn';
import Dashboard from "./dashboard/Dashboard";
import UserDetails from "./dashboard/userdetails/UserDetails";
import GDetails from "./dashboard/userdetails/GDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignIn />} />
                <Route path="/userdashboard" element={<Dashboard />} />
                <Route path="/user-details" element={<UserDetails />} />
                <Route path="/general-details" element={<GDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
