const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"]
        },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        img: {
            type: String,
            required: [true, "Image is required"]
        },
        categories: {
            type: Array,
            default: []
        },
        size: {
            type: Array,
            default: []
        },
        color: {
            type: Array,
            default: []
        },
        price: {
            type: Number,
            required: [true, "Price is required"]
        },
        inStock: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", ProductSchema);
