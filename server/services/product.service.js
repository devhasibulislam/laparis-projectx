/**
 * Title: Write a program using JavaScript on Product Service
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

/* internal imports */
const categoryModel = require("../models/category.model");
const Product = require("../models/product.model");

/* add new product */
exports.addProduct = async (req, res) => {
  const oldProduct = await Product.findOne({ name: req.body.name });

  if (oldProduct) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Product already exists",
    });
  } else {
    const product = req.body;

    product.thumbnail = {
      url: req.files.thumbnail[0].path,
      public_id: req.files.thumbnail[0].filename,
    };

    product.gallery = req.files.gallery.map((file) => ({
      url: file.path,
      public_id: file.filename,
    }));

    const newProduct = await Product.create(product);

    if (!newProduct) {
      res.status(500).json({
        acknowledgement: false,
        message: "Internal Server Error",
        description: "Something went wrong",
      });
    } else {
      await categoryModel.updateOne(
        { _id: product.category },
        { $push: { products: newProduct._id } }
      );

      res.status(201).json({
        acknowledgement: true,
        message: "Created",
        description: "New product added successfully",
      });
    }
  }
};

/* get products */
exports.getProducts = async (req, res) => {
  const products = await Product.find({})
    .populate("category")
    .sort({ updatedAt: -1 });

  if (products?.length === 0) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "No products found",
    });
  } else {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Products fetched successfully",
      data: products,
    });
  }
};

/* get single product */
exports.getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "Product not found",
    });
  } else {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Product fetched successfully",
      data: product,
    });
  }
};
