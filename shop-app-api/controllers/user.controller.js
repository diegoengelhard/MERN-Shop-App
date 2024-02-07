// Import User model
const User = require("../models/User.model");

const controller = {};

// Get Latest 5 Users
controller.getLatestUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ _id: -1 }).limit(5);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get All Users
controller.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get user by id
controller.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get user stats
controller.getUserStats = async (req, res) => {
    try {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update User
controller.updateUser = async (req, res) => {
    try {
        // Obtain user id
        const { id } = req.params;

        // Obtain user data from request body
        const userData = req.body;

        // Check if user exists
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: "User does not exist" });

        // Update product
        const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });

        // Send response
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = controller;