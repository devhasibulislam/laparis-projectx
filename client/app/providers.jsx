/**
 * Title: Write a program using JavaScript on Providers
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

"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid black",
            padding: "16px 8px",
            color: "black",
            backgroundColor: "white",
            borderRadius: "none",
          },
        }}
      />
    </NextUIProvider>
  );
}
