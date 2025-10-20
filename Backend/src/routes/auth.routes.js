//This file contains all the auth routes, they call the respective controller functions to handle the requests.
const express = require("express");
const authcontroller = require("../controllers/auth.controller");
const router = express.Router();

//User Auth APIs
router.post("/user/register", authcontroller.registerUser);
router.post("/user/login", authcontroller.loginUser);
router.get("/user/logout", authcontroller.logoutUser);

//Food Partner Auth APIs
router.post("/food-partner/register", authcontroller.registerFoodPartner);
router.post("/food-partner/login", authcontroller.loginFoodPartner);
router.get("/food-partner/logout", authcontroller.logoutFoodPartner);

module.exports = router;
