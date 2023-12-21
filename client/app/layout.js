/**
 * Title: Write a program using JavaScript on Layout
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

import "./globals.css";
import { roboto } from "./fonts";
import { Providers } from "./providers";

export const metadata = {
  title: "Laparis - T-Shirt Store",
  description:
    "T-Shirt collection for men, women, children and custom printed signature",
  openGraph: {
    title: "Laparis - T-Shirt Store",
    description:
      "T-Shirt collection for men, women, children and custom printed signature",
    url: "https://laparis-projectx-csr.vercel.app/",
    siteName: "Laparis ProjectX",
    images:
      "https://raw.githubusercontent.com/devhasibulislam/laparis-projectx/master/client/public/laparis-projectx.png",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
