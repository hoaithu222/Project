const productModel = require("../models/productModel")

async function getAllProduct(req, res) {
    try {
        const allProducts = await productModel.find().sort({ createdAt: -1 })
        res.status(200).json({
            message: "All product",
            data: allProducts,
            success: true,
            error: false,
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: err.message || err,
            success: false,
        })
    }
}
module.exports = getAllProduct;