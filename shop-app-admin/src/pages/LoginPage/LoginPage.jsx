import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

// Import service 
import service from '../../redux/service/service';

// Import toastify
import { toast } from 'react-toastify';

const LoginPage = () => {
    // Set states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Set dispatch
    const dispatch = useDispatch();

    // Set navigate
    const navigate = useNavigate();

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const userData = { email, password };
            dispatch(service.login(userData));
            toast.success('Login successful');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} style={{ padding: 10, width: 100 }}>
                Login
            </button>
        </div>
    )
}

export default LoginPage