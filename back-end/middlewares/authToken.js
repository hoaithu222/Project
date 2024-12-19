const jwt = require('jsonwebtoken');
async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(400).json({
                message: "User not Login",
                error: true,
                success: false,
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {


            if (err) {
                console.log("error", err);
            }
            req.userId = decoded?._id;
            req.userEmail = decoded?.email;
            next();
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
module.exports = authToken;