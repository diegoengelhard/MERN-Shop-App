import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';

// Import Redux actions
import { addProduct } from '../../redux/features/cartSlice';

// Import api service
import service from '../../redux/service/service';

// Import styles
import {
    Container,
    Wrapper,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
    Button
} from './SingleProduct.styles';

// Import MUI icons
import { Add, Remove } from "@material-ui/icons";

const SingleProduct = () => {
    // Set location from the browser route
    const location = useLocation();

    // Obtain the product id from the current location
    const productId = location.pathname.split('/')[3];

    // Set product state
    const [product, setProduct] = useState({});

    // Set product color, size, quantity state for the cart
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    // Set dispatch
    const dispatch = useDispatch();

    // Use effect to fetch the product data
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await service.getProduct(productId);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [productId]);

    // Handle product quantity change
    const handleQuantity = (type) => {
        if (type === 'dec' && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === 'inc') {
            setQuantity(quantity + 1);
        }
    }

    // Hanle add product to cart
    const handleAddToCart = () => {
        // Execute addProduct action from the redux store
        dispatch(addProduct({ ...product, color, size, quantity }));
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <ImgContainer>
                        <Image src={product.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Desc>
                            {product.description}
                        </Desc>
                        <Price>$ {product.price}</Price>
                        <FilterContainer>
                            <Filter>
                                {/* SELECT PRODUCT COLOR */}
                                <FilterTitle>Color</FilterTitle>
                                {/* MAP AVAILABLE PRODUCT COLORS FROM DB */}
                                {product.color?.map((c) => (
                                    <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                                ))}
                            </Filter>
                            <Filter>
                                {/* SELECT PRODUCT SIZE */}
                                <FilterTitle>Size</FilterTitle>
                                {/* MAP AVAILABLE PRODUCT SIZE FROM DB */}
                                <FilterSize onChange={(e) => setSize(e.target.value)}>
                                    {product.size?.map((s) => (
                                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                    ))}
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        {/* HANDLE PRODUCT AMOUNT */}
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity("dec")} />
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity("inc")} />
                            </AmountContainer>
                            {/* ADD PRODUCT TO CART */}
                            <Button onClick={handleAddToCart} >ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default SingleProduct