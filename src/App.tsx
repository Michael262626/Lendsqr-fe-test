import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './signup/SignIn';
import Dashboard from "./dashboard/Dashboard";
import UserDetails from "./dashboard/userdetails/UserDetails";
import GeneralDetails from "./dashboard/userdetails/GeneralDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignIn />} />
                <Route path="/userdashboard" element={<Dashboard />} />
                <Route path="/user-details" element={<UserDetails />} />
                <Route path="/general-details" element={<GeneralDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
