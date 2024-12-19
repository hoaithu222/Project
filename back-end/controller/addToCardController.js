const addToCardModel = require("../models/cardProduct");

async function addToCardController(req, res) {
    try {
        const { productId } = req?.body;
        const currentUser = req.userId;
        const isProductAvailable = await addToCardModel.findOne({ productId });



        if (isProductAvailable) {
            return res.status(200).json({
                message: "Already exits in Add to Card",
                success: false,
                error: true,
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,

        }
        const newAddToCart = new addToCardModel(payload);
        const saveProduct = await newAddToCart.save();

        return res.status(200).json({
            message: "Product added in card",
            success: true,
            data: saveProduct,
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
module.exports = addToCardController;