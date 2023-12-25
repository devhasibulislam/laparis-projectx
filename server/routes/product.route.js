/**
 * Title: Write a program using JavaScript on Product Route
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
const productController = require("../controllers/product.controller");
const verify = require("../middleware/verify.middleware");
const authorize = require("../middleware/authorize.middleware");
const upload = require("../middleware/upload.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new product
router.post(
  "/create",
  verify,
  authorize("admin"),
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
  ]),
  productController.addProduct
);

// get products
router.get("/all", productController.getProducts);

// display, update & delete single product
router
  .route("/:id")
  .get(verify, authorize("admin"), productController.getSingleProduct)
  .patch(
    verify,
    authorize("admin"),
    upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "gallery", maxCount: 5 },
    ]),
    productController.updateSingleProduct
  )
  .delete(verify, authorize("admin"), productController.deleteSingleProduct);

/* export user router */
module.exports = router;
