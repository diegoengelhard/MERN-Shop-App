import React from 'react';

// Import components
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Category/Categories/Categories';
import Products from '../../components/Product/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';

const HomePage = () => {
    return (
        <>
            {/* CAROUSEL */}
            <Carousel />
            {/* CATEGORIES */}
            <Categories />
            {/* PRODUCTS */}
            <Products />
            {/* NEWSLETTER */}
            <Newsletter />
        </>
    )
}

export default HomePage