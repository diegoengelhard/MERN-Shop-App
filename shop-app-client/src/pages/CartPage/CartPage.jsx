import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Import redux actions
import service from '../../redux/service/service.js'
import { emptyCart } from '../../redux/features/cartSlice.js';

// Import StripeCheckout
import StripeCheckout from 'react-stripe-checkout';

// Import styles
import {
    Container,
    Wrapper,
    Title,
    Top,
    TopButton,
    TopTexts,
    TopText,
    Bottom,
    Info,
    Product,
    ProductDetail,
    Image,
    Details,
    ProductName,
    ProductId,
    ProductColor,
    ProductSize,
    PriceDetail,
    ProductAmountContainer,
    ProductAmount,
    ProductPrice,
    Hr,
    Summary,
    SummaryTitle,
    SummaryItem,
    SummaryItemText,
    SummaryItemPrice,
    Button,
} from './CartPage.styles';

// Import MUI icons
import { Add, Remove } from "@material-ui/icons";

// Import toast
import { toast } from 'react-toastify';

// Import Stripe Publishable Key
const KEY = 'pk_test_51OfS5lG0Sd82o5Ztx3kx1uaix7PGDf824fsR4oAeptRzAnUS2TJ4QwO4ICSbgBsr5lMcuA4XFMwrUyKBBRLPFDM800RKMr5uOl';

const CartPage = () => {
    // Set cart from redux store
    const cart = useSelector(state => state.cart);

    // Obtain userId from redux
    const user = useSelector((state) => state.user.currentUser);
    const userId = user?.user._id;

    // Stripe payment token state
    const [stripeToken, setStripeToken] = React.useState(null);

    // Set navigate
    const navigate = useNavigate();

    // Set dispatch
    const dispatch = useDispatch();

    // Set stripe token for payment
    const onToken = (token) => {
        setStripeToken(token);
        // Navigate to the /products page
        navigate('/success');
    }

    // useEffect to navigate to success page after payment
    useEffect(() => {
        const paymentRequest = async () => {
            try {
                if (stripeToken) {
                    const response = await service.createPayment({
                        userId: userId,
                        token: stripeToken
                    });

                    if (response.status === 200) {
                        navigate('/success');
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        stripeToken && paymentRequest();
    }, []);

    // Handle Empty Cart
    const handleEmptyCart = () => {
        try {
            // Call the emptyCart function from cartSlice.js
            dispatch(emptyCart());
            toast.success('Cart has been emptied!');
        } catch (error) {
            console.log(error);
        }
    }

    // Handle Create Order
    const handleCreateOrder = () => {
        try {
            // Create an array of products with their id and quantity
            const products = cart.products.map(product => ({
                title: product.title,
                productId: product._id,
                quantity: product.quantity
            }));

            // Create the order data
            const orderData = {
                userId: userId, // 
                products: products,
                amount: cart.total,
                address: "885 Woodside Rd"
            };

            // Call the createOrder function from service.js
            service.createOrder(orderData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton onClick={() => navigate('/products')} >CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag ({cart.products.length})</TopText>
                        </TopTexts>
                        <TopButton type="filled" onClick={handleEmptyCart}>EMPTY CAR</TopButton>
                    </Top>
                    <Bottom>
                        {/* CART ADDED PRODUCTS */}
                        <Info>
                            {cart.products.map((product) => (
                                <Product>
                                    <ProductDetail>
                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName>
                                                <b>Product:</b> {product.title}
                                            </ProductName>
                                            <ProductId>
                                                <b>ID:</b> {product._id}
                                            </ProductId>
                                            <ProductColor color={product.color} />
                                            <ProductSize>
                                                <b>Size:</b> {product.size}
                                            </ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Add />
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Remove />
                                        </ProductAmountContainer>
                                        <ProductPrice>
                                            $ {product.price * product.quantity}
                                        </ProductPrice>
                                    </PriceDetail>
                                </Product>
                            ))}
                            <Hr />
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            {cart.total > 0 ? (
                                <StripeCheckout
                                    name="Shop Shop"
                                    image="https://logowik.com/content/uploads/images/shopping-bag6504.jpg"
                                    billingAddress
                                    shippingAddress
                                    description={`Your total is $${cart.total}`}
                                    amount={cart.total * 100}
                                    token={onToken}
                                    stripeKey={KEY}
                                >
                                    <Button onClick={handleCreateOrder}>CHECKOUT NOW</Button>
                                </StripeCheckout>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    )
}

export default CartPage