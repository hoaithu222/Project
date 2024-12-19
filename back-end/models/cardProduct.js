const mongoose = require('mongoose');
const addToCardSchema = mongoose.Schema({
    productId: {
        ref: 'product',
        type: String,
    },
    quantity: Number,
    userId: String,
}, {
    timestamps: true,
});
const addToCardModel = mongoose.model("addToCart", addToCardSchema);
module.exports = addToCardModel;