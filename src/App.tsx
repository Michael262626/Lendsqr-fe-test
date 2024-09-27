import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './signup/SignIn';
import Dashboard from "./dashboard/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignIn />} />
                <Route path="/userdashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
