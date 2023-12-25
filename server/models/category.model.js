/**
 * Title: Write a program using JavaScript on Category Model
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

/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

/* create category schema */
const categorySchema = new mongoose.Schema({
  // for category name
  name: {
    type: String,
    required: [true, "Please, provide category name"],
    trim: true,
    unique: true,
  },

  // for category description
  description: {
    type: String,
    required: [true, "Please, provide category description"],
    trim: true,
  },

  // for products embed
  products: [
    {
      type: ObjectId,
      ref: "Product",
    },
  ],
});

/* create category schema */
const Category = mongoose.model("Category", categorySchema);

/* export category schema */
module.exports = Category;
