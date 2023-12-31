/**
 * Title: Write a program using JavaScript on UserOption
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
 * Date: 31, December 2023
 */

import { useUpdateUserInfoMutation } from "@/services/user/userApi";
import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const UserOption = () => {
  const [option, setOption] = useState("my-profile");

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row gap-x-2">
        <button
          type="button"
          className={`bg-white text-black border border-black rounded px-4 text-sm py-1 ${
            option === "my-profile" ? "!bg-black text-white" : ""
          }`}
          onClick={() => setOption("my-profile")}
        >
          My Profile
        </button>
        <button
          type="button"
          className={`bg-white text-black border border-black rounded px-4 text-sm py-1 ${
            option === "my-orders" ? "!bg-black text-white" : ""
          }`}
          onClick={() => setOption("my-orders")}
        >
          My Orders
        </button>
      </div>

      {option === "my-profile" && <UserProfile />}
      {option === "my-orders" && <UserOrders />}
    </section>
  );
};

function UserProfile() {
  const user = useSelector((state) => state.user.auth);
  const [updateUser, { isLoading, data, error }] = useUpdateUserInfoMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
    },
  });

  useEffect(() => {
    if (isLoading) {
      toast.loading("Updating...", { id: "updateUser" });
    }

    if (data) {
      toast.success(data?.description, { id: "updateUser" });
    }

    if (error?.data) {
      toast.error(error?.data?.description, { id: "updateUser" });
    }
  }, [data, error, isLoading]);

  const handleUserUpdate = (data) => {
    updateUser({ id: user?._id, body: data });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleUserUpdate)}
        className="flex flex-col gap-y-4"
      >
        <label htmlFor="name" className="flex flex-col gap-y-1">
          <span className="text-sm">Your Full Name*</span>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            readOnly
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-y-1">
          <span className="text-sm">Your Valid Email*</span>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            readOnly
          />
        </label>
        <label htmlFor="phone" className="flex flex-col gap-y-1">
          <span className="text-sm">Your Phone Number*</span>
          <input
            type="tel"
            name="phone"
            id="phone"
            {...register("phone", { required: true })}
            readOnly
          />
        </label>
        <label htmlFor="address" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Your Address*</span>
          <input
            type="tel"
            name="address"
            id="address"
            placeholder="i.e. House No. 1, Road No. 1, Block No. 1"
            {...register("address", { required: true })}
          />
        </label>
        <button type="submit" className="py-2 bg-primary text-white rounded">
          Update Info
        </button>
      </form>
    </div>
  );
}

function UserOrders() {
  const user = useSelector((state) => state.user.auth);

  return (
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
          </tr>
        </thead>
        <tbody>
          {user?.purchases?.map(
            ({ product, stickers, quantity, size, price }) => (
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
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserOption;
