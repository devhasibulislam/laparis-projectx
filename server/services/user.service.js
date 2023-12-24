/**
 * Title: Write a program using JavaScript on User Service
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
const User = require("../models/user.model");
const token = require("../utils/token.util");

/* sign up an user */
exports.signUp = async (req, res) => {
  await User.create(req.body);

  res.status(201).json({
    acknowledgement: true,
    message: "Created",
    description: "User created successfully",
  });
};

/* sign in an user */
exports.signIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "User not found",
    });
  } else {
    const isPasswordValid = user.comparePassword(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Invalid password",
      });
    } else {
      const accessToken = token({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });

      res.status(200).json({
        acknowledgement: true,
        message: "OK",
        description: "Login successful",
        accessToken,
      });
    }
  }
};

/* reset user password */
exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "User not found",
    });
  } else {
    const hashedPassword = user.encryptedPassword(req.body.password);

    await User.findOneAndUpdate(
      { email: req.body.email },
      { password: hashedPassword },
      { runValidators: false, returnOriginal: false }
    );

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Password reset successful",
    });
  }
};

/* login persistance */
exports.persistLogin = async (req, res) => {
  const user = await User.findById(req.user._id).populate([
    {
      path: "cart.product",
      select: "_id name description price thumbnail",
    },
    {
      path: "favorites.product",
      select: "_id name description price thumbnail",
    },
  ]);

  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "Login successful",
    data: user,
  });
};
