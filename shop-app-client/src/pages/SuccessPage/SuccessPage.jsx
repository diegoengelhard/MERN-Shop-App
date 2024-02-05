import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import styles
import { Container, Button } from './SuccessPage.styles';

const SuccessPage = () => {
    // Set navigate
    const navigate = useNavigate();
    return (
        <Container>
            Order has been successfully placed
            <Button onClick={() => navigate('/')} >CONTINUE SHOPPING</Button>
        </Container>
    )
}

export default SuccessPage