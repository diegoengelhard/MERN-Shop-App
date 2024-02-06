import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

// Import service
import service from '../../../redux/service/service';

// Import toast
import { toast } from 'react-toastify';

// Import styles
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Agreement,
    Link,
    Button
} from './Register.styles';

const Register = () => {
    // Set input states
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Set navigate
    const navigate = useNavigate();

    // Set dispatch
    const dispatch = useDispatch();

    // Handle register submit
    const handleRegister = (e) => {
        e.preventDefault();

        try {
            const userData = { firstname, lastname, username, email, password, confirmPassword };

            // Check if all fields in userData are filled
            for (let key in userData) {
                if (!userData[key]) {
                    toast.error(`${key} is required`);
                    return;
                }
            }

            // Check if password and confirmPassword are the same
            if (password !== confirmPassword) {
                toast.error('Password and confirm password do not match');
                return;
            }

            dispatch(service.register(userData));
            toast.success('Registration successful');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

        setTimeout(() => {
            // Redirect to signin page after 3 seconds
            navigate('/auth/signin');
        }, 3000);
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="name" onChange={(e) => setFirstname(e.target.value)} />
                        <Input placeholder="last name" onChange={(e) => setLastname(e.target.value)} />
                        <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                        <Input placeholder="email" type='email' onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)} />
                        <Input placeholder="confirm password" type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button onClick={handleRegister} >CREATE ACCOUNT</Button>
                    </Form>
                    <Link onClick={() => navigate('/auth/signin')} >ALREADY HAVE AN ACCOUNT? CLICK HERE</Link>
                </Wrapper>
            </Container>
        </>
    )
}

export default Register