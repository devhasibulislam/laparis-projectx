/**
 * Title: Write a program using JavaScript on Product Model
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

/* create product schema */
const productSchema = new mongoose.Schema({
  // for product name
  name: {
    type: String,
    required: [true, "Please, provide product name"],
    trim: true,
    unique: true,
  },

  // for category description
  description: {
    type: String,
    required: [true, "Please, provide category description"],
    trim: true,
  },

  // for product price
  price: {
    type: Number,
    required: [true, "Please, provide product price"],
    min: [1, "Price won't be less than 1"],
  },

  // for category
  category: {
    type: ObjectId,
    ref: "Category",
    required: [true, "Please, provide category"],
  },

  // for size
  size: [
    {
      type: String,
      required: [true, "Please, provide product size"],
    },
  ],

  // for thumbnail
  thumbnail: {
    url: {
      type: String,
      required: [true, "Please, provide product thumbnail"],
    },
    public_id: {
      type: String,
      required: [true, "Please, provide product thumbnail public id"],
    },
  },

  // for gallery
  gallery: [
    {
      url: {
        type: String,
        required: [true, "Please, provide product gallery"],
      },
      public_id: {
        type: String,
        required: [true, "Please, provide product gallery public id"],
      },
    },
  ],
});

/* export product model */
module.exports = mongoose.model("Product", productSchema);
