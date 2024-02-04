import React from 'react';
import { useNavigate } from 'react-router-dom';

// Impoert styles
import { Container, Info, Circle, Image, Icon } from './ProductItem.styles'

// Import MUI icons
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";

const ProductItem = ({ productItem }) => {
    // Set navigate
    const navigate = useNavigate();
    
    return (
        <Container>
            <Circle />
            <Image src={productItem.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined onClick={() => navigate(`/products/item/${productItem._id}`)} />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem