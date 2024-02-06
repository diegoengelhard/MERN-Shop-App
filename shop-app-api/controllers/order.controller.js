// Import Order model
const Order = require("../models/Order.model");

// Import User model
const User = require("../models/User.model");

// Import Product model
const Product = require("../models/Product.model");

const controller = {};

// Create a new order
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

        // Obtain order data from request body
        const order = new Order(req.body);

        // Save order
        await order.save();

        // Send response
        res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get orders by user id
controller.getByUserId = async (req, res) => {
    try {
        // Obtain user id
        const { userId } = req.params;

        // Obtain order by user id
        const order = await Order.find({ userId: userId });
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get all orders (only admin)
controller.getAll = async (req, res) => {
    try {
        // Obtain all orders
        const orders = await Order.find();

        // Send response
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get latest 5 orders (only admin)
controller.getLatest = async (req, res) => {
    try {
        // Obtain latest 5 orders
        const orders = await Order.find().sort({ _id: -1 }).limit(5);

        // Send response
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update order (only admin)
controller.update = async (req, res) => {
    try {
        // Obtain order id
        const { id } = req.params;

        // Obtain order data
        const orderData = req.body;

        // Obtain order
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Update order
        const updatedOrder = await Order.findByIdAndUpdate(id, orderData, { new: true });

        // Send response
        res.status(200).json({ message: "Order updated successfully", updatedOrder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete order (only admin){
controller.delete = async (req, res) => {
    try {
        // Obtain order id
        const { id } = req.params;

        // Obtain order
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Delete order
        await Order.findByIdAndDelete(id);

        // Send response
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

controller.getIncome = async (req, res) => {
    try {
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = controller;