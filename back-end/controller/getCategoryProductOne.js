const productModel = require("../models/productModel");

async function getCategoryProduct(req, res) {
    try {
        // Lấy danh sách các danh mục
        const productCategories = await productModel.distinct("category");

        // Truy vấn một sản phẩm từ mỗi danh mục
        const productByCategoryPromises = productCategories.map((category) =>
            productModel.findOne({ category })
        );
        const productByCategory = await Promise.all(productByCategoryPromises);

        // Lọc bỏ kết quả null nếu không tìm thấy sản phẩm
        const filteredProducts = productByCategory.filter(product => product !== null);

        res.status(200).json({
            message: "Get Category successfully",
            error: false,
            success: true,
            data: filteredProducts,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || "Failed to get categories",
            data: [],
            error: err.message || err,
            success: false,
        });
    }
}

module.exports = getCategoryProduct;
