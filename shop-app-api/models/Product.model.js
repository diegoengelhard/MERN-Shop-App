const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            unique: true
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
            type: String
        },
        color: {
            type: String
        },
        price: {
            type: Number,
            required: [true, "Price is required"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", ProductSchema);