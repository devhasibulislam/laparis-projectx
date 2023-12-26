/**
 * Title: Write a program using JavaScript on Cart
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
 * Date: 21, December 2023
 */

import React from "react";
import Grub from "./Grub";
import products from "@/data/products";
import { useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";

const Cart = () => {
  const user = useSelector((state) => state.user.auth);

  return user?.cart?.length === 0 ? (
    <>
      <p className="text-center">No Products Added!</p>
    </>
  ) : (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg">
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
                Sticker
              </th>
              <th scope="col" className="px-6 py-3">
                Sizes
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
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
            {user?.cart?.map(({ product, sticker, quantity, size, price }) => (
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
                  <Avatar
                    src={sticker?.url}
                    alt={sticker?.public_id}
                    size="sm"
                  />
                </td>
                <td className="px-6 py-4">{size}</td>
                <td className="px-6 py-4">{quantity}</td>
                <td className="px-6 py-4">{price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="p-1.5 border rounded-full bg-red-500 text-white">
                    <FaRegTrashAlt className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
