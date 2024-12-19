const addToCardModel = require("../models/cardProduct");

async function updateAddToCardProductController(req, res) {
    try {
        const currentUserId = req.userId;
        const addToCardProductId = req?.body?._id;
        const qty = req.body.quantity;
        const updateProduct = await addToCardModel.updateOne({ _id: addToCardProductId }, {
            ...(qty && { quantity: qty })
        })
        res.json({
            message: "Product update",
            data: updateProduct,
            errors: false,
            success: true,
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
module.exports = updateAddToCardProductController;