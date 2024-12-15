const express = require('express');


const router = express.Router();
const UserSignUpController = require("../controller/userSignUp");
const userSignInController = require("../controller/userSignIn");
const userDetailsController = require('../controller/userDetail');
const authToken = require('../middlewares/authToken');
const userLogout = require('../controller/userLogout');
const allUsers = require('../controller/allUsers');
const updateUserRole = require('../controller/updateUserRole');
const uploadProduct = require('../controller/uploadProduct');
const getAllProduct = require('../controller/getProduct');
const updateProductController = require('../controller/updateProduct');
const getCategoryProduct = require('../controller/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/getCategoryWiseProduct');
router.post("/signup", UserSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout", userLogout);


// admin panel
router.get("/all-user", authToken, allUsers);
router.post("/updateUserRole", authToken, updateUserRole)

// product 
router.post("/upload-product", authToken, uploadProduct);
router.get("/all-product", getAllProduct)
router.post("/update-product", authToken, updateProductController);
router.post("/category-product", getCategoryWiseProduct);

// category 
router.get("/get-category", getCategoryProduct)
module.exports = router;