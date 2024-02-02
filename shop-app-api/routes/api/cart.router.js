const express = require('express');
const router = express.Router();

// Import Cart controller
const controller = require("../../controllers/cart.controller");

// Import auth middleware
const { authenticate, authorize } = require("../../middlewares/auth.middleware");

// GET get all carts (admin only)
router.get("/find", authenticate, authorize, controller.getAll);

// GET get cart by user id
router.get("/find/:userId", authenticate, controller.getByUserId);

// POST create a new cart
router.post("/create", authenticate, controller.create);

// PUT update a cart
router.put("/update/:id", authenticate, controller.update);

// DELETE delete a cart (empty cart)
router.delete("/delete/:id", authenticate, controller.delete);

module.exports = router;