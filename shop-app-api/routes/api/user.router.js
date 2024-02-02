const express = require('express');
const router = express.Router();

// Import user controller
const controller = require('../../controllers/user.controller');

// Import auth middleware
const { authenticate, authorize } = require("../../middlewares/auth.middleware");

// GET get all user stats (only admin)
router.get('/stats', authenticate, authorize, controller.getUserStats);

module.exports = router;