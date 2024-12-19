

const stripe = require('../config/stripe');
const userModel = require('../models/userModel');


async function paymentController(request, response) {
    try {
        const { cartItems } = request.body;
        console.log(cartItems);
        const user = await userModel.findOne({ _id: request.userId });

        const params = {
            submit_type: "pay",
            mode: "payment",
            payment_method_types: ['card'],
            billing_address_collection: "auto",
            shipping_options: [{
                shipping_rate: 'shr_1QXZBUP2o9WssqvdnAR4TSIz'

            }],
            customer_email: user.email,
            line_items: cartItems.map((item, index) => {
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.productId.productName,
                            images: item.productId.productImage,
                            metadata: {
                                productId: item.productId._id
                            }
                        },
                        unit_amount: item.productId.selling,

                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.FRONTEND_URL}/success`, // Thay bằng URL frontend của bạn
            cancel_url: `${process.env.FRONTEND_URL}/cancel`, // URL nếu người dùng hủy thanh toán


        }
        const session = await stripe.checkout.sessions.create(params)
        response.status(303).json(session);
    }
    catch (err) {
        response.status(400).json({
            message: err.message || "Failed to get categories",
            data: [],
            error: err.message || err,
            success: false,
        });
    }

}

module.exports = paymentController;