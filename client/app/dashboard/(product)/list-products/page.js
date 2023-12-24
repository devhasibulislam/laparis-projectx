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
import { useGetProductsQuery } from "@/services/product/productApi";
import { Avatar, Chip } from "@nextui-org/react";
import React, { useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";

const Page = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const products = useMemo(() => data?.data || [], [data]);

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...", { id: "getProducts" });
    }
    if (data) {
      toast.success(data?.description, { id: "getProducts" });
    }
    if (error?.data) {
      toast.error(error?.data?.description || "Something went wrong", {
        id: "getProducts",
      });
    }
  }, [isLoading, data, error]);

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
                  <span className="flex flex-row gap-1">
                    {product?.sizes?.map((size) => (
                      <Chip key={size} size="sm">
                        {size}
                      </Chip>
                    ))}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product?.category?.name}
                </td>
                <td className="px-6 py-4">{product?.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">Edit | Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default Page;
