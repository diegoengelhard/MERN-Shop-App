const express = require('express');
const router = express.Router();

// Import Product controller
const controller = require('../../controllers/product.controller');

// Import auth middleware
const { authenticate, authorize } = require('../../middlewares/auth.middleware');

// GET get all products
router.get('/', controller.getAll);

// GET get a product by id
router.get('/:id', controller.getById);

// POST create a new product
router.post('/create', authenticate, authorize, controller.create);

// PUT update a product
router.put('/update/:id', authenticate, authorize, controller.update);

// DELETE delete a product
router.delete('/delete/:id', authenticate, authorize, controller.delete);

module.exports = router;