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

module.exports = controller;