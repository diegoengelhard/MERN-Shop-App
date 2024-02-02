const express = require('express');
const router = express.Router();

// Imports all routers
const authRouter = require('./auth.router');
const productRouter = require('./product.router');

// Define all routes
router.use('/auth', authRouter);
router.use('/products', productRouter);

module.exports = router;