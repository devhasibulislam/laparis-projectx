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
import Auth from "./auth";

export const metadata = {
  metadataBase: new URL("https://laparis-projectx-csr.vercel.app"),
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
  twitter: {
    card: "summary_large_image",
    site: "@devhasibulislam",
    title: "Laparis - T-Shirt Store",
    description:
      "T-Shirt collection for men, women, children and custom printed signature",
    image:
      "https://raw.githubusercontent.com/devhasibulislam/laparis-projectx/master/client/public/laparis-projectx.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <Auth>{children}</Auth>
        </Providers>
      </body>
    </html>
  );
}

/**
 * metadata.metadataBase is not set for resolving social open graph or twitter images
 * https://github.com/vercel/next.js/discussions/57251
 */