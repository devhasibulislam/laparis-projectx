/**
 * Title: Write a program using JavaScript on Page
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
 * Date: 22, December 2023
 */

"use client";

import Dashboard from "@/layouts/dashboard/Dashboard";
import {
  useDeleteSingleProductMutation,
  useGetProductsQuery,
} from "@/services/product/productApi";
import { Avatar, Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const Page = () => {
  const {
    data: productsData,
    isLoading: fetchingProducts,
    error: productsDataError,
  } = useGetProductsQuery();
  const products = useMemo(() => productsData?.data || [], [productsData]);
  const [
    deleteProduct,
    {
      data: deleteProductData,
      isLoading: deletingProduct,
      error: productDataError,
    },
  ] = useDeleteSingleProductMutation();
  const router = useRouter();

  useEffect(() => {
    if (fetchingProducts) {
      toast.loading("Loading...", { id: "getProducts" });
    }
    if (productsData) {
      toast.success(productsData?.description, { id: "getProducts" });
    }
    if (productsDataError?.data) {
      toast.error(
        productsDataError?.data?.description || "Something went wrong",
        {
          id: "getProducts",
        }
      );
    }

    if (deletingProduct) {
      toast.loading("Deleting...", { id: "deleteProduct" });
    }
    if (deleteProductData) {
      toast.success(deleteProductData?.description, { id: "deleteProduct" });
    }
    if (productDataError?.data) {
      toast.error(
        productDataError?.data?.description || "Something went wrong",
        {
          id: "deleteProduct",
        }
      );
    }
  }, [
    fetchingProducts,
    productsData,
    productsDataError,
    deletingProduct,
    deleteProductData,
    productDataError,
  ]);

  return (
    <Dashboard>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Thumbnail
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sizes
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                key={product?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">
                  <Avatar
                    src={product?.thumbnail?.url}
                    alt={product?.thumbnail?.public_id}
                    size="sm"
                  />
                </td>
                <td className="px-6 py-4">
                  <span className="whitespace-nowrap w-60 overflow-x-auto block">
                    {product?.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="flex flex-row items-center gap-1">
                    {product?.sizes?.map((size) => (
                      <Chip key={size} size="sm">
                        {size}
                      </Chip>
                    ))}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product?.category?.name || "N/A"}
                </td>
                <td className="px-6 py-4">{product?.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="flex flex-row gap-2">
                    <button
                      className="p-1.5 border rounded-full bg-green-500 text-white"
                      onClick={() => router.push(`/dashboard/${product?._id}`)}
                    >
                      <FaRegEdit className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1.5 border rounded-full bg-red-500 text-white"
                      onClick={() => deleteProduct(product?._id)}
                    >
                      <FaRegTrashAlt className="h-4 w-4" />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default Page;
