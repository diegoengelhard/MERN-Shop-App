import React, { useState } from 'react';
import { useDispatch } from "react-redux";


const LoginPage = () => {
    // Set states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Set dispatch
    const dispatch = useDispatch();

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Dispatch login action
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
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
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