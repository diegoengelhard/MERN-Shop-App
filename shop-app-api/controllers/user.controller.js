// Import User model
const User = require("../models/User.model");

const controller = {};

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