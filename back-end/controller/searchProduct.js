const productModel = require("../models/productModel");

async function searchProduct(req, res) {
    try {
        const query = req.query.q;
        console.log(query);
        const regex = new RegExp(query, 'i', 'g')

        const product = await productModel.find({
            "$or": [
                {
                    productName: regex
                },
                {
                    category: regex
                }
            ]
        })


        res.json({
            data: product,
            message: "Search Product list",
            error: false,
            success: true
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
module.exports = searchProduct;