import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './signup/SignIn';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignIn />} />
            </Routes>
        </Router>
    );
}

export default App;
