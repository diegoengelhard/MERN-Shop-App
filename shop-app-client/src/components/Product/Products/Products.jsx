import React, { useEffect, useState } from 'react';

// Import axios
import axios from "axios";

// Import ProductItem
import ProductItem from '../ProductItem/ProductItem';

// Import styles
import { Title, Container } from './Products.styles';

// Import temp products data
import { popularProducts } from '../../../data';

const Products = ({ category, filters, sort }) => {
    // Set products state
    const [products, setProducts] = useState([]);

    // Set filtered products state
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Fetch products by sort from db
    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(
                category
                  ? `http://localhost:3500/api/products?category=${category}`
                  : "http://localhost:3500/api/products"
              );
            setProducts(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getProducts();
      }, [category]);

    // Use effect to filter products
    useEffect(() => {
        category && setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        )
    }, [products, category, filters])

    // Use effect to sort products (newest, asc, desc)
    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === 'asc') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
        } else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    return (
        <>
            <Title>PRODUCTS</Title>
            <Container>
                {category
                    ? filteredProducts.map((item) => (
                        <ProductItem productItem={item} key={item._id} /> 
                    ))
                    : products.slice(0, 8).map((item) => (
                        <ProductItem productItem={item} key={item._id} />
                    ))}
            </Container>
        </>
    )
}

export default Products