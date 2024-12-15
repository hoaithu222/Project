const uploadProductPermission = require("../helpers/permission");
const productModel = require("../models/productModel");

async function updateProductController(req, res) {
    try {
        const sessionUserId = req.userId;
        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied")
        }
        const { _id, ...resBody } = req.body;
        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody);
        res.status(200).json({
            message: "Product update successfully",
            data: updateProduct,
            success: true,
            error: false,
        })
    }
    catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: err.message || err,
            success: false,
        })
    }
}
module.exports = updateProductController;