/**
 * Title: Write a program using JavaScript on Font
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 18, December 2023
 */

import { Roboto, Kaushan_Script } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
});

export const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kaushan-script",
  weight: "400",
  style: ["normal"],
});
