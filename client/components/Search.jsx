/**
 * Title: Write a program using JavaScript on Search
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

const Search = () => {
  return (
    <section className="flex flex-col gap-y-8">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Type any product name"
        className="w-full"
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {products?.map((product) => (
          <Grub key={product?._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Search;
