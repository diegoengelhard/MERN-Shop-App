import React from 'react';

import { Link } from 'react-router-dom';

// Import styles
import { Container, Image, Info, Title, Button } from './CategoryItem.styles';

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem