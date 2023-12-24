/**
 * Title: Write a program using JavaScript on CategoryApi
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

const categoryApi = laparisApi.injectEndpoints({
  endpoints: (build) => ({
    // add category
    addCategory: build.mutation({
      query: (body) => ({
        url: "/category/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Category"],
    }),

    // get categories
    getCategories: build.query({
      query: () => ({
        url: "/category/all",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["Category"],
    }),

    // delete category
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} = categoryApi;
