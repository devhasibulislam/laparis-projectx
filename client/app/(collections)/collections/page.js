/**
 * Title: Write a program using JavaScript on Collections
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

import Grub from "@/components/Grub";
import ProductFilter from "@/components/ProductFilter";
import products from "@/data/products";
import Main from "@/layouts/main/Main";
import React from "react";

const Collections = () => {
  return (
    <Main>
      <section className="max-w-5xl mx-auto px-4 py-20 flex flex-col gap-y-20">
        <div className="grid grid-cols-12 gap-4 relative">
          <ProductFilter displayAll={true} />
          <div className="lg:col-span-9 md:col-span-8 col-span-12">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
              {products?.map((product) => (
                <Grub key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Collections;
