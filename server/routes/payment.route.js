/**
 * Title: Write a program using JavaScript on Payment Route
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
 * Date: 28, December 2023
 */

/* external imports */
const express = require("express");

/* internal imports */
const paymentController = require("../controllers/payment.controller");
const verify = require("../middleware/verify.middleware");
const authorize = require("../middleware/authorize.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// create an order
router.post(
  "/create",
  verify,
  authorize("user"),
  paymentController.createOrder
);

// verify an order
router.post(
  "/verify",
  verify,
  authorize("user"),
  paymentController.verifyOrder
);

/* export user router */
module.exports = router;
