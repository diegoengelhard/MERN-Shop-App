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
            type: String,
            default: "n/a"
        },
        color: {
            type: String,
            default: "n/a"
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
