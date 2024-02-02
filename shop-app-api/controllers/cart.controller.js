// Import Cart model
const Cart = require("../models/Cart.model");

// Import User model
const User = require("../models/User.model");

// Import Product model
const Product = require("../models/Product.model");

const controller = {};

// Create a new cart
controller.create = async (req, res) => {
    try {
        // Validate userId
        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Validate productId
        const product = await Product.findById(req.body.products[0].productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Obtain cart data from request body
        const cart = new Cart(req.body);

        // Save cart
        await cart.save();

        // Send response
        res.status(201).json({ message: "Cart created successfully", cart });
    } catch (error) {
        res.status(400).json(error);
    }
}

// Get cart by user id
controller.getByUserId = async (req, res) => {
    try {
        // Obtain user id
        const { userId } = req.params;

        // Obtain cart by user id
        const cart = await Cart.findOne({ userId: userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Get all carts
controller.getAll = async (req, res) => {
    try {
        // Obtain all carts
        const carts = await Cart.find();

        // Send response
        res.status(200).json(carts);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Update a cart
controller.update = async (req, res) => {
    try {
        // Obtain cart id
        const { id } = req.params;

        // Obtain cart data from request body
        const cartData = req.body;

        // Check if cart exists
        const cart = await Cart.findById(id);
        if (!cart) return res.status(404).json({ message: "Cart does not exist" });

        // Update cart
        const updatedCart = await Cart.findByIdAndUpdate(id, cartData, { new: true });

        // Send response
        res.status(200).json({ message: "Cart updated successfully", cart: updatedCart });
    } catch (error) {
        res.status(400).json(error);
    }
}

// Delete a cart (empty cart)
controller.delete = async (req, res) => {
    try {
        // Obtain cart id
        const { id } = req.params;

        // Check if cart exists
        const cart = await Cart.findById(id);
        if (!cart) return res.status(404).json({ message: "Cart does not exist" });

        // Delete cart
        await Cart.findByIdAndDelete(id);

        // Send response
        res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = controller;