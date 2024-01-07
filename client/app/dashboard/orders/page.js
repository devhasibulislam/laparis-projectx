/**
 * Title: Write a program using JavaScript on Order
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
 * Date: 30, December 2023
 */

"use client";

import Dashboard from "@/layouts/dashboard/Dashboard";
import { useModifyOrderStatusMutation } from "@/services/payment/paymentApi";
import { useGetAllUserQuery } from "@/services/user/userApi";
import { Avatar } from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

const Page = () => {
  const {
    isLoading: fetchingUsers,
    data: usersData,
    error: usersDataError,
  } = useGetAllUserQuery();
  const users = useMemo(() => usersData?.data || [], [usersData]);
  const [
    updateStatus,
    { isLoading: updatingStatus, data: statusData, error: statusDataError },
  ] = useModifyOrderStatusMutation();
  const [sortingOption, setSortingOption] = useState("all");

  useEffect(() => {
    if (fetchingUsers) {
      toast.loading("Fetching orders...", {
        id: "getUsers",
      });
    }

    if (usersData) {
      toast.success(usersData?.description, {
        id: "getUsers",
      });
    }

    if (usersDataError?.data) {
      toast.error(usersDataError?.data?.description || "Something went wrong", {
        id: "getUsers",
      });
    }

    if (updatingStatus) {
      toast.loading("Updating status...", {
        id: "updateStatus",
      });
    }

    if (statusData) {
      toast.success(statusData?.description, {
        id: "updateStatus",
      });
    }

    if (statusDataError?.data) {
      toast.error(
        statusDataError?.data?.description || "Something went wrong",
        {
          id: "updateStatus",
        }
      );
    }
  }, [
    fetchingUsers,
    usersData,
    usersDataError,
    updatingStatus,
    statusData,
    statusDataError,
  ]);

  const filteredUsers = useMemo(() => {
    if (sortingOption === "all") {
      return users;
    }

    return users?.filter((user) =>
      user?.purchases?.some((purchase) => purchase.status === sortingOption)
    );
  }, [users, sortingOption]);

  return (
    <Dashboard>
      <div className="flex md:flex-row md:justify-between flex-col gap-4 mb-4">
        <div></div>

        <select
          name="sorting"
          id="sorting"
          value={sortingOption}
          onChange={(e) => setSortingOption(e.target.value)}
        >
          <option value="all">All</option>
          <option value="order-confirmed">Order Confirmed</option>
          <option value="order-shipped">Order Shipped</option>
          <option value="out-of-delivery">Out of Delivery</option>
          <option value="order-delivered">Order Delivered</option>
        </select>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User
              </th>
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
            {filteredUsers?.map((user) =>
              user?.purchases?.map(
                ({ product, stickers, quantity, size, price, status, _id }) => (
                  <tr
                    key={_id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{user?.name}</td>
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
                        {stickers?.length > 0
                          ? stickers?.map((sticker) => (
                              <Avatar
                                key={sticker?._id}
                                src={sticker?.url}
                                alt={sticker?.public_id}
                                size="sm"
                              />
                            ))
                          : "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4">{size}</td>
                    <td className="px-6 py-4">{quantity}</td>
                    <td className="px-6 py-4">{price}</td>
                    <td className="px-6 py-4">
                      <select
                        name="status"
                        id="status"
                        value={status}
                        onChange={(e) =>
                          updateStatus({
                            status: e.target.value,
                            purchaseId: _id,
                            userId: user?._id,
                          })
                        }
                      >
                        <option value="order-confirmed">Order Confirmed</option>
                        <option value="order-shipped">Order Shipped</option>
                        <option value="out-of-delivery">Out of Delivery</option>
                        <option value="order-delivered">Order Delivered</option>
                      </select>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default Page;
