import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import redux actions
import service from '../../redux/service/service.js'

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

// Import Stripe Publishable Key
const KEY = import.meta.env.STRIPE_PUBLISHABLE_KEY;

const CartPage = () => {
    // Set cart from redux store
    const cart = useSelector(state => state.cart);

    // Stripe payment token state
    const [stripeToken, setStripeToken] = React.useState(null);

    // Set navigate
    const navigate = useNavigate();

    // Set stripe token for payment
    const onToken = (token) => {
        setStripeToken(token);
    }

    // useEffect to navigate to success page after payment
    useEffect(() => {
        const paymentRequest = async () => {
            try {
                // Payment request to the server

            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton onClick={() => navigate('/products')} >CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
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
                                <Button>CHECKOUT NOW</Button>
                            </StripeCheckout>
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    )
}

export default CartPage