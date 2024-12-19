const addToCardModel = require("../models/cardProduct");

async function addToCardViewProduct(req, res) {
    try {
        const currentUser = req.userId;

        const allProduct = await addToCardModel.find({
            userId: currentUser,
        }).populate("productId")
        return res.status(200).json({
            data: allProduct,
            message: "all product in card",
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
module.exports = addToCardViewProduct;