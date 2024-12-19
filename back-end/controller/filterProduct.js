const productModel = require("../models/productModel");

async function filterProduct(req, res) {
    try {
        const categoryList = req?.body?.category || [];
        const product = await productModel.find({

            category: {
                "$in": categoryList
            }

        })
        res.json({
            data: product,
            success: true,
            message: "Product",
            error: false,
        })



    } catch (err) {
        res.status(400).json({
            message: err.message || "Failed to get categories",
            data: [],
            error: err.message || err,
            success: false,
        });
    }
}
module.exports = filterProduct;