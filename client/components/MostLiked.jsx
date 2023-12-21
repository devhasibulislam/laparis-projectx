/**
 * Title: Write a program using JavaScript on MostLiked
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

import products from "@/data/products";
import React from "react";
import Grub from "./Grub";

const MostLiked = () => {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row gap-x-4 items-center">
        <hr className="h-1 w-full border-dashed border-black" />
        <h1 className="whitespace-nowrap uppercase font-semibold">
          You May Like
        </h1>
        <hr className="h-1 w-full border-dashed border-black" />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {products?.slice(0, 8)?.map((product) => (
          <Grub key={product?._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default MostLiked;
