// Import User model
const User = require('../models/User.model');

// Import bcrypt
const bcrypt = require('bcrypt');

// Import jwtTools create token
const { createToken } = require('../utils/jwt.tools');

const controller = {};

// Registers a new user
controller.signUp = async (req, res) => {
    try {
        // Get user data from request body
        const { firstname, lastname, username, email, password, confirmPassword } = req.body;

        // Validate user input isn't empty
        if (!firstname || !lastname || !username || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Check if email is valid
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) return res.status(400).json({ message: 'Invalid email format' });

        // Check if password matches regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).send({ message: 'Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special char' });
        }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Salt & Hash user password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({ firstname, lastname, username, email, password: hashedPassword });

        // Save user to database
        await newUser.save();

        // Return new user
        res.status(201).json({ message: 'User successfully created!', user: newUser});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Login user
controller.signIn = async (req, res) => {
    try {
        // Get usert data from request body
        const { email, password } = req.body;

        // Validate user input isn't empty
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Compare user password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Create token
        const token = createToken(user._id);

        // Sends success response with token
        res.status(200).send({ token: token, user: user, message: 'User signed in successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Logout user
controller.signOut = (req, res) => {
    try {
        // Sends success response
        res.status(200).json({ message: 'User signed out successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Verify user is admin

module.exports = controller;