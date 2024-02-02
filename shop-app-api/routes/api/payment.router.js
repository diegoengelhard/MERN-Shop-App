const express = require('express');
const router = express.Router();

// Import payment controller
const controller = require('../../controllers/payment.controller');

// Payment route
router.post('/payment', controller.createCharge);


module.exports = router;