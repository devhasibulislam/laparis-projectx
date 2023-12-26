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

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <Image
          isZoomed
          src={product?.thumbnail?.url}
          alt={product?.thumbnail?.public_id}
          height={250}
          className="h-[250px] w-full object-cover"
          radius="none"
        />
        <h2 className="font-semibold cursor-pointer hover:underline line-clamp-2">
          {product?.name}
        </h2>
      </div>
      <article className="flex flex-col gap-y-2 h-full mt-auto">
        <div className="flex flex-row justify-between items-center">
          <Chip
            size="sm"
            variant="bordered"
            className="lowercase text-tiny flex flex-row items-stretch"
            radius="none"
          >
            $<span className="text-sm font-medium">{product?.price}</span>
          </Chip>
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
