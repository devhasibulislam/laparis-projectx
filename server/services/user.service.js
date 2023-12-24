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
const sendEmail = require("../utils/email.util");
const token = require("../utils/token.util");

function isExpire(mongoDBTime) {
  const mongoDBDate = new Date(mongoDBTime);
  const currentTime = new Date();
  const timeDifferenceInMs = currentTime - mongoDBDate;
  const oneHourInMs = 60 * 60 * 1000;

  return timeDifferenceInMs >= oneHourInMs;
}

/* sign up an user */
exports.signUp = async (req, res) => {
  const oldUser = await User.findOne({ email: req.body.email });

  if (oldUser) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "User already exists",
    });
  } else {
    const newUser = await User.create(req.body);

    if (!newUser) {
      res.status(500).json({
        acknowledgement: false,
        message: "Internal Server Error",
        description: "Something went wrong",
      });
    } else {
      const token = await newUser.generateConfirmationToken();
      const url = `${req.protocol}://${req.get("host")}`;
      await newUser.save({ validateBeforeSave: false });

      sendEmail(
        {
          id: newUser._id,
          email: newUser.email,
          name: newUser.name,
          expireIn: newUser.confirmationTokenExpire,
        },
        `${url}/api/user/register?token=${token}`,
        "Confirm Your Email",
        res
      );
    }
  }
};

/* confirm sign up */
exports.confirmRegistration = async (req, res) => {
  const user = await User.findOne({ confirmationToken: req.query.token });

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "User not found",
    });
  } else {
    if (isExpire(user.confirmationTokenExpire)) {
      res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Token expired",
      });
    } else {
      user.status = "active";
      user.confirmationToken = undefined;
      user.confirmationTokenExpire = undefined;
      await user.save();

      res.redirect(process.env.ORIGIN_URL);
    }
  }
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
    if (user.status === "active") {
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
    } else {
      res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Please confirm email first",
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
    if (user.status === "active") {
      const url = `${req.protocol}://${req.get("host")}`;
      const token = await user.generateResetPasswordToken();
      const hashedPassword = user.encryptedPassword(req.body.password);

      user.password = hashedPassword;
      user.status = "inactive";

      await User.findOneAndUpdate({ email: user.email }, user, {
        runValidators: false,
        returnOriginal: false,
      });

      sendEmail(
        {
          email: user.email,
          name: user.name,
          expireIn: user.resetPasswordExpire,
        },
        `${url}/api/user/recover?token=${token}`,
        "Recover Your Password",
        res
      );
    } else {
      res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Please confirm email first",
      });
    }
  }
};

/* confirm recovery */
exports.confirmRecovery = async (req, res) => {
  const user = await User.findOne({ resetPasswordToken: req.query.token });

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "User not found",
    });
  } else {
    if (isExpire(user.resetPasswordExpire)) {
      res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Token expired",
      });
    } else {
      user.status = "active";
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();

      res.redirect(process.env.ORIGIN_URL);
    }
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
