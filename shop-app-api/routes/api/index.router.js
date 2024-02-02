const express = require('express');
const router = express.Router();

// Imports all routers
const authRouter = require('./auth.router');
const productRouter = require('./product.router');
const cartRouter = require('./cart.router');
const orderRouter = require('./order.router');

// Define all routes
router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/cart', cartRouter);
router.use('/order', orderRouter);

module.exports = router;