import React from 'react';

// Impoert styles
import { Container, Info, Circle, Image, Icon } from './ProductItem.styles'

// Import MUI icons
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";

const ProductItem = ({ productItem }) => {
    return (
        <Container>
            <Circle />
            <Image src={productItem.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem