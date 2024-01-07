/**
 * Title: Write a program using JavaScript on UserApi
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
 * Date: 26, December 2023
 */

const { laparisApi } = require("../laparis");

export const userApi = laparisApi.injectEndpoints({
  endpoints: (builder) => ({
    // add to cart or favorite
    updateUser: builder.mutation({
      query: (body) => ({
        url: "/user/update",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["User"],
    }),

    // remove from cart
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `/user/update?cart=${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["User"],
    }),

    // get all user
    getAllUser: builder.query({
      query: () => ({
        url: "/user/all",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["User"],
    }),

    // update user info
    updateUserInfo: builder.mutation({
      query: ({ id, body }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useRemoveFromCartMutation,
  useGetAllUserQuery,
  useUpdateUserInfoMutation,
} = userApi;
