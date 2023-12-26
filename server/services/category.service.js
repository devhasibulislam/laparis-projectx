/**
 * Title: Write a program using JavaScript on Category Service
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
const Category = require("../models/category.model");
const Product = require("../models/product.model");

/* add new category */
exports.addCategory = async (req, res) => {
  const category = await Category.findOne({ name: req.body.name });

  if (category) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Category already exists",
    });
  } else {
    await Category.create(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New category added successfully",
    });
  }
};

/* get categories */
exports.getCategories = async (res) => {
  const categories = await Category.find({});

  if (categories?.length === 0) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "No categories found",
    });
  } else {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Categories fetched successfully",
      data: categories,
    });
  }
};

/* get single category */
exports.getSingleCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "Category not found",
    });
  } else {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Category fetched successfully",
      data: category,
    });
  }
};

/* delete category */
exports.deleteCategory = async (req, res) => {
  if (req.params.id.length === 0) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Category ID is required",
    });
  } else {
    const category = await Category.findById(req.params.id);

    if (!category) {
      res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "Category not found",
      });
    } else {
      await Category.findByIdAndDelete(req.params.id);
      await Product.updateMany(
        {},
        {
          $pull: {
            category: category._id,
          },
        }
      );

      res.status(200).json({
        acknowledgement: true,
        message: "OK",
        description: "Category deleted successfully",
      });
    }
  }
};
