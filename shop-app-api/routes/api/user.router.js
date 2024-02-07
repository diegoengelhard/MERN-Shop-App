const express = require('express');
const router = express.Router();

// Import user controller
const controller = require('../../controllers/user.controller');

// Import auth middleware
const { authenticate, authorize } = require("../../middlewares/auth.middleware");

// GET get all user stats (only admin)
router.get('/stats', authenticate, authorize, controller.getUserStats);

// GET get all users (only admin)
router.get('/all', authenticate, authorize, controller.getUsers);

// GET get latest 5 users (only admin)
router.get('/latest', authenticate, authorize, controller.getLatestUsers);

// GET get user by id
router.get('/:id', authenticate, authorize, controller.getUserById);

// PUT Update user
router.put('/update/:id', authenticate, authorize, controller.updateUser);

module.exports = router;