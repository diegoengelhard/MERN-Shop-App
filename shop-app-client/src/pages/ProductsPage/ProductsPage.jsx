import React, { useState } from 'react'
import { useLocation } from "react-router";

// Import components
import Products from '../../components/Product/Products/Products'

// Import styles
import {
    Container,
    Title,
    FilterContainer,
    Filter,
    FilterText,
    Select,
    Option
} from './ProductsPage.styles'

const ProductsPage = () => {
    // Get the current location from the browser route
    const location = useLocation()

    // Get the category from the current location
    const category = location.pathname.split('/')[2]

    // Set filter state
    const [filters, setFilters] = useState({})

    // Set sort state
    const [sort, setSort] = useState('newest')

    // Filter handler
    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }
    return (
        <>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled value='colot'>
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>brown</Option>
                        <Option>green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
        </>
    )
}

export default ProductsPage