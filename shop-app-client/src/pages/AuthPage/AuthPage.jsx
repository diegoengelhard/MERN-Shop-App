import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Import pages
import Login from '../../components/AuthForms/Login/Login';
import Register from '../../components/AuthForms/Register/Register';

const AuthPage = () => {
    return (
        <div>
            <Routes>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />
            </Routes>
        </div>
    )
}

export default AuthPage