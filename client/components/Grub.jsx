/**
 * Title: Write a program using JavaScript on Grub
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
 * Date: 20, December 2023
 */

"use client";

import React, { useEffect } from "react";
import { Button, Chip, Image, Link, Tooltip } from "@nextui-org/react";
import { MdFavoriteBorder } from "react-icons/md";
import { useUpdateUserMutation } from "@/services/user/userApi";
import { toast } from "react-hot-toast";

const Grub = ({ product }) => {
  const [
    update,
    { isLoading: updating, data: updateData, error: updateError },
  ] = useUpdateUserMutation();

  useEffect(() => {
    if (updating) {
      toast.loading("Loading...", { id: "update" });
    }

    if (updateData) {
      toast.success(updateData?.description, { id: "update" });
    }

    if (updateError?.data) {
      toast.error(updateError?.data?.description || "Something went wrong", {
        id: "update",
      });
    }
  }, [product, updating, updateData, updateError]);

  function calculatePercentageDifference(oldValue, newValue) {
    var percentageDifference =
      Math.abs((newValue - oldValue) / ((oldValue + newValue) / 2)) * 100;
    return percentageDifference;
  }

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2 relative">
        <Image
          isZoomed
          src={product?.thumbnail?.url}
          alt={product?.thumbnail?.public_id}
          height={250}
          className="h-[250px] w-full object-cover"
          radius="none"
        />
        <h2
          className="font-semibold cursor-pointer hover:underline line-clamp-2"
          onClick={() => (window.location.href = `/${product?._id}`)}
        >
          {product?.name}
        </h2>

        {calculatePercentageDifference(product?.price, 500).toFixed(2) > 0 && (
          <Chip
            size="sm"
            className="absolute top-3 right-3 z-50 shadow bg-white text-black"
            radius="none"
          >
            {calculatePercentageDifference(product?.price, 500).toFixed(2)}% Off
          </Chip>
        )}
      </div>
      <article className="flex flex-col gap-y-2 h-full mt-auto">
        <div className="flex flex-row justify-between items-center">
          <p className="flex flex-row items-center gap-x-2">
            <span className="text-tiny">
              $<span className="text-sm font-medium">{product?.price}</span>
            </span>
            <span className="text-tiny line-through text-gray-500">
              $<span className="text-xs font-medium">{product?.price}</span>
            </span>
          </p>
          <span className="text-tiny">{product?.category?.name}</span>
        </div>

        <div className="flex flex-row gap-x-1">
          <Link
            href={`/${product?._id}`}
            size="sm"
            radius="none"
            className="w-full bg-black text-white text-center flex justify-center items-center"
          >
            Add to Cart
          </Link>
          <Tooltip
            placement="left"
            showArrow
            radius="sm"
            content="Add to Favorite"
          >
            <Button
              isIconOnly
              radius="none"
              size="sm"
              className=" bg-black text-white"
              onPress={() => update({ favorite: product?._id })}
            >
              <MdFavoriteBorder className="h-4 w-4" />
            </Button>
          </Tooltip>
        </div>
      </article>
    </section>
  );
};

export default Grub;
