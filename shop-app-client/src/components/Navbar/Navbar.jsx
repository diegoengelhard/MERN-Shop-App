import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import service
import service from '../../redux/service/service';

// Import styles
import {
    Container,
    Wrapper,
    Left,
    Language,
    SearchContainer,
    Input,
    Center,
    Logo,
    Right,
    MenuItem
} from './Navbar.styles';

// Import toast
import { toast } from 'react-toastify';

// Import MUI components
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {
    // Obtain user from redux
    const user = useSelector((state) => state.user.currentUser);
    const username = user?.user.username;

    // Set navigate
    const navigate = useNavigate();

    // Obtain cart quantity from the redux store
    const cartQuantity = useSelector(state => state.cart.quantity);

    // Handle sign out
    const handleSignOut = () => {
        // Call the logout service
        service.logout();

        // Clear local storage
        localStorage.clear();

        // Show success toast
        toast.success('Sign out successful');

        // reload window after 1.5 sec
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <Search style={{ color: "gray", fontSize: 16 }} />
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo onClick={() => navigate('/')}>SHOP APP</Logo>
                    </Center>
                    <Right>
                        {user ? (
                            <>
                                <MenuItem>Hello, {username}!</MenuItem>
                                <MenuItem onClick={() => navigate('/myOrders')}>My Orders</MenuItem>
                                <MenuItem onClick={handleSignOut} >Sign out</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={() => navigate('/auth/signup')}>REGISTER</MenuItem>
                                <MenuItem onClick={() => navigate('/auth/signin')}>SIGN IN</MenuItem>
                            </>
                        )}
                        <MenuItem>
                            <Badge badgeContent={cartQuantity} color="primary">
                                <ShoppingCartOutlined onClick={() => navigate('/cart')} />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar