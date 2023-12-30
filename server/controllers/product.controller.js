/**
 * Title: Write a program using JavaScript on Product Controller
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

/* internal import */
const productService = require("../services/product.service");

/* add new product */
exports.addProduct = async (req, res, next) => {
  try {
    await productService.addProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get products */
exports.getProducts = async (req, res, next) => {
  try {
    await productService.getProducts(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get single product */
exports.getSingleProduct = async (req, res, next) => {
  try {
    await productService.getSingleProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update single product */
exports.updateSingleProduct = async (req, res, next) => {
  try {
    await productService.updateSingleProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* delete single product */
exports.deleteSingleProduct = async (req, res, next) => {
  try {
    await productService.deleteSingleProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* add reviews */
exports.addReviews = async (req, res, next) => {
  try {
    await productService.addReviews(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};