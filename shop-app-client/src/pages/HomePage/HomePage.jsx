import React from 'react';

// Import components
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Category/Categories/Categories';
import Products from '../../components/Product/Products/Products';

const HomePage = () => {
    return (
        <>
            {/* CAROUSEL */}
            <Carousel />
            {/* CATEGORIES */}
            <Categories />
            {/* PRODUCTS */}
            <Products />
        </>
    )
}

export default HomePage