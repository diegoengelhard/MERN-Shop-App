import React, { useEffect, useState } from 'react';
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
} from './OrdersPage.styles';

// Import MUI icons
import { Add, Remove } from "@material-ui/icons";

// Import Stripe Publishable Key
const KEY = import.meta.env.STRIPE_PUBLISHABLE_KEY;

const CartPage = () => {
    // Obtain userId from redux
    const user = useSelector((state) => state.user.currentUser);
    const userId = user?.user._id;


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await service.getOrdersByUserId(userId);
            setOrders(response);
        };

        fetchOrders();
    }, [userId]);

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>YOUR ORDERS</Title>
                    <Top>
                    </Top>
                    <Bottom>
                        {/* ORDERS */}
                        <Info>
                            {orders.map((order) => (
                                <>
                                    <Product>
                                    <ProductDetail>
                                        <Image src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.svg" />
                                        <Details>
                                            <ProductName>
                                                <b>OrderId:</b> {order._id}
                                            </ProductName>
                                            {order.products.map((product) => (
                                                <>
                                                    <div key={product._id}>
                                                    <ProductId>
                                                        <b>Product ID:</b> {product.productId}
                                                    </ProductId>
                                                    <ProductName>
                                                        <b> Product:</b> {product.title}
                                                    </ProductName>
                                                    <ProductSize>
                                                        <b> Quantity:</b> {product.quantity}
                                                    </ProductSize>
                                                </div>
                                                </>
                                            ))}
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductPrice>
                                            $ {order.amount}
                                        </ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <Hr />
                                </>
                            ))}
                            <Hr />
                        </Info>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    )
}

export default CartPage