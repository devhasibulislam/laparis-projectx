/**
 * Title: Write a program using JavaScript on Category Route
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

/* internal import */
const categoryController = require("../controllers/category.controller");
const verify = require("../middleware/verify.middleware");
const authorize = require("../middleware/authorize.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new category
router.post(
  "/create",
  verify,
  authorize("admin"),
  categoryController.addCategory
);

// get categories
router.get("/all", categoryController.getCategories);

// delete category
router.delete(
  "/delete/:id",
  verify,
  authorize("admin"),
  categoryController.deleteCategory
);

/* export user router */
module.exports = router;
