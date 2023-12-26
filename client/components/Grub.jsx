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

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  Tooltip,
} from "@nextui-org/react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";

const Grub = ({ product }) => {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-2">
        <Image
          isZoomed
          src={product?.thumbnail?.url}
          alt={product?.thumbnail?.public_id}
          height={250}
          className="h-[250px] w-full object-cover"
          radius="md"
        />
        <h2
          className="font-semibold cursor-pointer hover:underline line-clamp-2"
          onClick={() => router.push(`/${product?._id}`)}
        >
          {product?.name}
        </h2>
      </div>
      <article className="flex flex-row justify-between items-center h-full mt-auto">
        <Chip
          size="sm"
          variant="bordered"
          className="lowercase text-tiny flex flex-row items-stretch"
        >
          $<span className="text-sm font-medium">{product?.price}</span>
        </Chip>
        <span className="text-tiny">{product?.category?.name}</span>
      </article>
    </section>
  );
};

export default Grub;
