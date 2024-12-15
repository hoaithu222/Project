const productModel = require("../models/productModel");

async function getCategoryWiseProduct(req, res) {
    try {
        const { category } = req?.body || req?.query;
        const product = await productModel.find({ category });
        res.json({
            data: product,
            message: true,
            error: false,
        })

    }
    catch (err) {
        res.status(400).json({
            message: err.message || "Failed to get categories",
            data: [],
            error: err.message || err,
            success: false,
        });
    }


}
module.exports = getCategoryWiseProduct;