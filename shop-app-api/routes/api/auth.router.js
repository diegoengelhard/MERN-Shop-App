const express = require('express');
const router = express.Router();

// Import Auth controller
const controller = require('../../controllers/auth.controller');

// POST Registers a new user
router.post('/signup', controller.signUp);

// POST Login user
router.post('/signin', controller.signIn);

// GET Logout user
router.get('/signout', controller.signOut);

module.exports = router;