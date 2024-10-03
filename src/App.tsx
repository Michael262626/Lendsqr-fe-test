import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignIn from './signin/SignIn';
import Dashboard from "./dashboard/Dashboard";
import UserDetails from "./dashboard/userdetails/UserDetails";
import Detail from "./dashboard/userdetails/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} />
                <Route path="/signup" element={<SignIn />} />
                <Route path="/userdashboard" element={<Dashboard />} />
                <Route path="/user-details" element={<UserDetails />} />
                <Route path="/general-details" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
