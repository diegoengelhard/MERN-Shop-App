const express = require('express');
const router = express.Router();

// Import Order controller
const controller = require('../../controllers/order.controller');

// Import auth middleware
const {authenticate, authorize} = require("../../middlewares/auth.middleware");

// GET Get all orders (only admin)
router.get('/find', authenticate, authorize, controller.getAll);

// GET Get orders by user id
router.get('/find/:userId', authenticate, controller.getByUserId);

// POST Create a new order
router.post('/create', authenticate, controller.create);

// PUT Get order by user id (only admin)
router.put('/update/:id', authenticate, authorize, controller.update);

// DELETE delete order by id (only admin)
router.delete('/delete/:id', authenticate, authorize, controller.delete);

module.exports = router;