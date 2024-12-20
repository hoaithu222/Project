const userModel = require("../models/userModel");

async function allUsers(req, res) {
    try {
        console.log("userid  all user", req.userId);
        const allUsers = await userModel.find();
        res.json({
            message: "All user",
            data: allUsers,
            success: true,
            error: false,
        })
    } catch (err) {
        res.status(404).json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}
module.exports = allUsers;