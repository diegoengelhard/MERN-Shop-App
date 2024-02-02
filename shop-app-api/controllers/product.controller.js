// Import Product model
const Product = require("../models/Product.model");

const controller = {};

// Get all products
controller.getAll = async (req, res) => {
    try {
        // Obtain all products
        const products = await Product.find();

        // Send response
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a product by id
controller.getById = async (req, res) => {
    try{
        // Obtain product id
        const { id } = req.params;

        // Obtain product
        const product = await Product.findById(id);

        // Send response
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Create a new product
controller.create = async (req, res) => {
    try {
        // Obtain product data from request body
        const product = new Product(req.body);

        // Save product
        await product.save();

        // Send response
        res.status(201).json({ message: "Product created successfully", product});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a product
controller.update = async (req, res) => {
    try {
        // Obtain product id
        const { id } = req.params;

        // Obtain product data from request body
        const productData = req.body;

        // Check if product exists
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: "Product does not exist" });

        // Update product
        const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });

        // Send response
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a product
controller.delete = async (req, res) => {
    try {
        // Obtain product id
        const { id } = req.params;

        // Check if product exists
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: "Product does not exist" });

        // Delete product
        await Product.findByIdAndDelete(id);

        // Send response
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = controller;