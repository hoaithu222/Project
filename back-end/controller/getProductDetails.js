const productModel = require("../models/productModel");

const getProductDetail = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await productModel.findById(productId);
        res.status(200).json({
            data: product,
            message: "Get product success",
            success: true,
            error: false,
        });
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
module.exports = getProductDetail;