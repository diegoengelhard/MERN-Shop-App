import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
                                <MenuItem>Hello, {username}</MenuItem>
                                <MenuItem>Sign out</MenuItem>
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