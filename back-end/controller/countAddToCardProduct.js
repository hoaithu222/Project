const addToCardModel = require("../models/cardProduct");

async function countAddToCartProduct(req, res) {
    try {
        const userId = req.userId;
        const countProduct = await addToCardModel.countDocuments({
            userId: userId
        });
        res.status(200).json({
            data: {
                count: countProduct,
            },
            message: "ok",
            success: true,
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
module.exports = countAddToCartProduct;