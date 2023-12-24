/**
 * Title: Write a program using JavaScript on User Route
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https:/instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 24, December 2023
 */

/* external import */
const express = require("express");

/* middleware imports */
const verify = require("../middleware/verify.middleware");

/* internal import */
const userController = require("../controllers/user.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */

// sign up an user
router.post("/register", userController.signUp);

// sign in an user
router.post("/login", userController.signIn);

// recover user password
router.patch("/recover", userController.forgotPassword);

// login persistance
router.get("/me", verify, userController.persistLogin);

/* export user router */
module.exports = router;
