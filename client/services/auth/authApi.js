/**
 * Title: Write a program using JavaScript on AuthApi
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
 * Date: 24, December 2023
 */

const { laparisApi } = require("../laparis");

const authApi = laparisApi.injectEndpoints({
  endpoints: (builder) => ({
    // register
    register: builder.mutation({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        body,
      }),

      invalidatesTags: ["User"],
    }),

    // login
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),

      invalidatesTags: ["User"],
    }),

    // recover
    recover: builder.mutation({
      query: (body) => ({
        url: "/user/recover",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useRecoverMutation } =
  authApi;
