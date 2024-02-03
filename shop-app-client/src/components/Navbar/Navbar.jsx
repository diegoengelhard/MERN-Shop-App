import React from 'react';

import { useNavigate } from 'react-router-dom';

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
    // Set navigate
    const navigate = useNavigate();

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
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar