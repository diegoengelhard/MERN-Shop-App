import React from 'react';

// Import components
import CategoryItem from '../CategoryItem/CategoryItem';

// Import styles
import { Container } from './Categories.styles';

// Import temp category data
import { categories } from '../../../data';

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories