import React from 'react';

// Import components
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Category/Categories/Categories';

const HomePage = () => {
    return (
        <>
            {/* CAROUSEL */}
            <Carousel />
            {/* CATEGORIES */}
            <Categories />
        </>
    )
}

export default HomePage