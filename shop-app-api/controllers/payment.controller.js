// Import stripe and stripe secret key
const stripe = require("stripe")(process.env.STRIPE_KEY);

const controller = {};

// Payment controller
controller.createCharge = async (req, res) => {
    try {
        const { tokenId, amount } = req.body;

        // Validate input isn't empty
        if (!tokenId || !amount) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create charge
        const charge = await stripe.charges.create({
            source: tokenId,
            amount: amount,
            currency: "usd",
        });

        // Return charge
        res.status(200).json(charge);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = controller;