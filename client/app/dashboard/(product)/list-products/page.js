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

import products from "@/data/products";
import Dashboard from "@/layouts/dashboard/Dashboard";
import { Avatar, Chip } from "@nextui-org/react";
import React from "react";

const Page = () => {
  return (
    <Dashboard>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Thumbnail
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Sizes
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                key={product?.key}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="px-6 py-4">
                  <Avatar
                    src={product?.thumbnail}
                    alt={product?.name}
                    size="sm"
                  />
                </td>
                <td class="px-6 py-4">
                  <span className="whitespace-nowrap w-60 overflow-x-auto block">
                    {product?.name}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="flex flex-row gap-1">
                    {product?.size?.map((size) => (
                      <Chip key={size} size="sm">
                        {size}
                      </Chip>
                    ))}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{product?.category}</td>
                <td class="px-6 py-4">{product?.price}</td>
                <td class="px-6 py-4 whitespace-nowrap">Edit | Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default Page;
