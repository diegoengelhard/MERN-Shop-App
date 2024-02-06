import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// Import redux actions
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
    Button,
    Link
} from './Login.styles';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    // Set navigate
    const navigate = useNavigate();

    // Handle login submit
    const handleLogin = (e) => {
        e.preventDefault();
        try {
            const userData = { email, password };
            dispatch(service.login(userData));
            toast.success('Login successful');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

        setTimeout(() => {
            navigate('/');
        }, 3000); // Redirect to home page after 3 seconds
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="email" type='email' onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)} />
                        <Button onClick={handleLogin}>LOGIN</Button>
                        <Link onClick={() => navigate('/auth/signup')} >DON'T HAVE AN ACCOUNT? CLICK HERE</Link>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default Login