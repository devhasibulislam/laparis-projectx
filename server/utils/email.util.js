/**
 * Title: Write a program using JavaScript on Email Util
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

/* external import */
const { createTransport } = require("nodemailer");
const User = require("../models/user.model");

function localTime(timestamp) {
  const date = new Date(timestamp);
  const regularTime = date.toLocaleString();

  return regularTime;
}

function sendEmail(user, url, subject, res) {
  const transporter = createTransport({
    service: process.env.APP_SERVICE,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_EMAIL,
    to: user?.email,
    subject: `Laparis - ${subject}`,
    html: `
        <div style="font-family: Verdana, Geneva, Tahoma, sans-serif">
            <div
                style="
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid black;
                background-color: white;
                "
            >
                <div style="text-align: center; margin-bottom: 30px">
                    <img
                        src="https://github.com/devhasibulislam/laparis-projectx/blob/master/client/public/logo.png?raw=true"
                        alt="Company Logo"
                        style="max-width: 150px"
                    />
                    <h1>${subject}</h1>
                </div>
                <div style="margin-bottom: 30px">
                    <p style="text-align: center">
                        Dear <b>${
                          user?.name
                        }</b>, Please, click the button below:
                    </p>
                </div>
                <a
                    href=${url}
                    style="
                        display: block;
                        width: fit-content;
                        margin: 0 auto;
                        padding: 10px 20px;
                        background-color: white;
                        color: black;
                        text-decoration: none;
                        border-radius: none;
                        border: 1px solid black;
                    "
                >
                    <b>Accept Confirmation</b>
                </a>
                <div style="margin-top: 30px; text-align: center; color: #888">
                    <p>Keep mind this link will expire within <b>${localTime(
                      user.expireIn
                    )}</b></p>
                    <p><span style="color: white; background-color: red;"><b>Having trouble?</b></span> Paste the URL <mark><b><i>${url}</i></b></mark> at <b>reply</b> to this <b>email</b></p>
                    <p>If you did not <b>create an account</b> with us, please ignore this email.</p>
                    <p>&copy; ${new Date().getFullYear()} PlanNao. All rights reserved.</p>
                </div>
            </div>
        </div>
        `,
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error.message);

      await User.findByIdAndDelete(user.id);

      res.status(500).json({
        acknowledgement: false,
        message: "Internal Server Error",
        description: error.name,
      });
    } else {
      console.log("Email sent to: " + info.envelope.to[0]);

      res.status(201).json({
        acknowledgement: true,
        message: "Created",
        description: `Check your email for confirmation`,
      });
    }
  });
}

module.exports = sendEmail;
