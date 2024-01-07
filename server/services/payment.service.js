/**
 * Title: Write a program using JavaScript on Payment Service
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
const Razorpay = require("razorpay");
const crypto = require("crypto");

/* internal imports */
const User = require("../models/user.model");

/* Razorpay instance creation */
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* create an order */
exports.createOrder = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "User not found",
      description: "User not found",
    });
  } else {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: user.email,
    };

    instance.orders.create(options, async (err, order) => {
      if (err) {
        res.status(500).json({
          acknowledgement: false,
          message: "Internal Server Error",
          description: "Something went wrong",
        });
      } else {
        res.status(200).json({
          acknowledgement: true,
          message: "OK",
          description: "Order created successfully",
          data: order,
        });
      }
    });
  }
};

/* verify an order */
exports.verifyOrder = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "User not found",
      description: "User not found",
    });
  } else {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Invalid signature",
      });
    } else {
      const result = await User.findByIdAndUpdate(
        user._id,
        {
          $push: {
            purchases: { $each: user.cart },
          },
        },
        {
          runValidators: true,
        }
      );

      if (!result) {
        res.status(500).json({
          acknowledgement: false,
          message: "Internal Server Error",
          description: "Something went wrong",
        });
      } else {
        // remove the cart
        await User.findByIdAndUpdate(user._id, {
          $set: {
            cart: [],
          },
        });

        res.status(200).json({
          acknowledgement: true,
          message: "OK",
          description: "Order verified successfully",
        });
      }
    }
  }
};

/* modify an order status */
exports.modifyOrderStatus = async (req, res) => {
  if (req.body.status && req.body.purchaseId && req.body.userId) {
    // Find the user within the user object
    const user = await User.findById(req.body.userId);

    if (!user) {
      res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "User not found",
      });
    } else {
      // Find the particular purchase object within the purchases array and update its status
      const purchase = user.purchases.find(
        (p) => p._id == req.body.purchaseId
      );

      if (Object.keys(purchase).length > 0) {
        purchase.status = req.body.status;
      } else {
        res.status(404).json({
          acknowledgement: false,
          message: "Not Found",
          description: "Purchase not found",
        });
        return;
      }

      // Save the updated user object
      const result = await user.save();

      if (result) {
        res.status(200).json({
          acknowledgement: true,
          message: "OK",
          description: "Successfully updated purchase status",
        });
      } else {
        res.status(500).json({
          acknowledgement: false,
          message: "Internal Server Error",
          description: "Something went wrong",
        });
      }
    }
  } else {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Missing required fields",
    });
  }
};
