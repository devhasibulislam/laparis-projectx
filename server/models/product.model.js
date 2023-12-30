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
const productSchema = new mongoose.Schema(
  {
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

    // for product regularPrice
    regularPrice: {
      type: Number,
      required: [true, "Please, provide product regularPrice"],
      min: [1, "Price won't be less than 1"],
    },

    // for product discountedPrice
    discountedPrice: {
      type: Number,
      min: [0, "Price won't be less than 0"],
      max: [
        this.regularPrice,
        "Discounted price can't be more than regular price",
      ],
      default: 0,
    },

    // for product frontStickerPrice
    frontStickerPrice: {
      type: Number,
      min: [0, "Price won't be less than 0"],
      default: 0,
    },

    // for product backStickerPrice
    backStickerPrice: {
      type: Number,
      min: [0, "Price won't be less than 0"],
      default: 0,
    },

    // for category
    category: {
      type: ObjectId,
      ref: "Category",
      required: [true, "Please, provide category"],
    },

    // for sizes
    sizes: [
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

    // for review
    reviews: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
        star: {
          type: Number,
          min: [1, "Rating can't be less than 1"],
          max: [5, "Rating can't be more than 5"],
        },
        feedback: {
          type: String,
          trim: true,
        },
      },
    ],

    // for user account time stamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/* create product schema */
const Product = mongoose.model("Product", productSchema);

/* export product schema */
module.exports = Product;
