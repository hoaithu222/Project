const addToCardModel = require("../models/cardProduct");

async function deleteAddToCardProduct(req, res) {
    try {
        const currentUserId = req.userId;
        const addToCartProductId = req.body._id;
        const deleteProduct = await addToCardModel.deleteOne({ _id: addToCartProductId })
        res.json({
            message: "Product Deleted From Cart",
            error: false,
            success: true,
            data: deleteProduct
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
module.exports = deleteAddToCardProduct;