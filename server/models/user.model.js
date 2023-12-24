/**
 * Title: Write a program using JavaScript on User Model
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
const bcrypt = require("bcryptjs");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

/* create user schema */
const userSchema = new mongoose.Schema(
  {
    // for user full name
    name: {
      type: String,
      required: [true, "Please, provide your full name"],
      trim: true,
      maxLength: [100, "Your name would be at most 100 characters"],
    },

    // for user email
    email: {
      type: String,
      required: [true, "Please, provide your email address"],
      unique: [true, "Email already exist. Please, provide new"],
    },

    // for user initial password
    password: {
      type: String,
      required: [true, "Please, provide a strong password"],
    },

    // for user contact number
    phone: {
      type: String,
      required: [
        true,
        "Please, provide your phone number with country code without any space",
      ],
      unique: true,
    },

    // for user role to be played
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    // for favorites or wishlist
    favorites: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
      },
    ],

    // for carting orders
    cart: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          min: [1, "Quantity won't be less than 1"],
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

/* encrypted user account password */
userSchema.methods.encryptedPassword = function (password) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
};

/* middleware to encrypt password */
userSchema.pre("save", async function (next) {
  try {
    // initialize encrypted password
    if (!this.isModified("password")) {
      return next();
    }

    // encrypt password
    this.password = this.encryptedPassword(this.password);
  } catch (error) {
    next(error);
  }
});

/* compare passwords as sign in proportion */
userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

/* create user model schema */
const User = mongoose.model("User", userSchema);

/* export user schema */
module.exports = User;
