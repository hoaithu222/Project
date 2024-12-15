const uploadProductPermission = require("../helpers/permission");
const productModel = require("../models/productModel")

async function uploadProduct(req, res) {
    try {
        const sessionUserId = req.userId;
        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied")
        }

        const uploadProduct = await productModel(req.body);
        const saveProduct = await uploadProduct.save();
        res.status(201).json({
            message: "Upload product successfully",
            data: saveProduct,
            success: true,
            error: false,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: err.message || err,
            success: false,
        })
    }

}
module.exports = uploadProduct;