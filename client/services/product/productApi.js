/**
 * Title: Write a program using JavaScript on ProductApi
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

export const productApi = laparisApi.injectEndpoints({
  endpoints: (build) => ({
    // add product
    addProduct: build.mutation({
      query: (body) => ({
        url: "/product/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Product"],
    }),

    // get products
    getProducts: build.query({
      query: () => ({
        url: "/product/all",
        method: "GET",
      }),

      providesTags: ["Product"],
    }),

    /* get single product */
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["Product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
} = productApi;