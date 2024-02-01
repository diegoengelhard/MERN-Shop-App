const express = require('express');
const router = express.Router();

// Imports all routers
const authRouter = require('./auth.router');

// Define all routes
router.use('/auth', authRouter);

module.exports = router;