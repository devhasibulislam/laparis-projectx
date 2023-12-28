/**
 * Title: Write a program using JavaScript on PaymentApi
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
 * Date: 28, December 2023
 */

const { laparisApi } = require("../laparis");

export const paymentApi = laparisApi.injectEndpoints({
  endpoints: (build) => ({
    // create an order
    createOrder: build.mutation({
      query: (body) => ({
        url: "/payment/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
    }),

    // verify an order
    verifyOrder: build.mutation({
      query: (body) => ({
        url: "/payment/verify",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useVerifyOrderMutation } = paymentApi;
