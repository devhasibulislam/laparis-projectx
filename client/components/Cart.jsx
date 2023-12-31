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

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import { useRemoveFromCartMutation } from "@/services/user/userApi";
import { toast } from "react-hot-toast";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Cart = () => {
  const user = useSelector((state) => state.user.auth);
  const [
    removeCart,
    { isLoading: cartRemoving, data: cartData, error: cartErrorData },
  ] = useRemoveFromCartMutation();

  useEffect(() => {
    if (cartRemoving) {
      toast.loading("Removing...", { id: "cartRemove" });
    }

    if (cartData) {
      toast.success(cartData?.description, { id: "cartRemove" });
    }

    if (cartErrorData?.data) {
      toast.error(cartErrorData?.data?.description || "Something went wrong", {
        id: "cartRemove",
      });
    }
  }, [cartRemoving, cartData, cartErrorData]);

  return user?.cart?.length === 0 || Object.keys(user).length === 0 ? (
    <>
      <p className="text-lg">No Products Added in Cart!</p>
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
            {user?.cart?.map(
              ({ product, stickers, quantity, size, price, _id }) => (
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
                    <span className="whitespace-nowrap w-60 overflow-x-auto block scrollbar-hide">
                      {product?.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex flex-row gap-x-2 items-center">
                      {stickers?.length > 0 ? stickers?.map((sticker) => (
                        <Avatar
                          key={sticker?._id}
                          src={sticker?.url}
                          alt={sticker?.public_id}
                          size="sm"
                        />
                      )) : "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-4">{size}</td>
                  <td className="px-6 py-4">{quantity}</td>
                  <td className="px-6 py-4">{price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="flex flex-row gap-1 items-center">
                      <button
                        className="p-1.5 border rounded-full bg-green-500 text-white"
                        onClick={() =>
                          (window.location.href = `/${product?._id}`)
                        }
                      >
                        <MdOutlineRemoveRedEye className="h-4 w-4" />
                      </button>
                      <button
                        className="p-1.5 border rounded-full bg-red-500 text-white"
                        onClick={() => removeCart(_id)}
                      >
                        <FaRegTrashAlt className="h-4 w-4" />
                      </button>
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
