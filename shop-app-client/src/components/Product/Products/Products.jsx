import React from 'react';

// Import ProductItem
import ProductItem from '../ProductItem/ProductItem';

// Import styles
import { Title, Container } from './Products.styles';

// Import temp products data
import { popularProducts } from '../../../data';

const Products = () => {
    return (
        <>
            <Title>HOT PRODUCTS</Title>
            <Container>
                {popularProducts.map((item) => (
                    <ProductItem productItem={item} key={item.id} />
                ))}
            </Container>
        </>
    )
}

export default Products