const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    description: String,
    price: Number,
    productImage: [],
    selling: Number
}, {
    timestamps: true,
});
const productModel = mongoose.model("product", productSchema);
module.exports = productModel;