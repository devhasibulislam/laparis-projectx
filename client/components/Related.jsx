/**
 * Title: Write a program using JavaScript on Related
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

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import products from "@/data/products";
import Grub from "./Grub";
import GrubSkeleton from "./GrubSkeleton";
import { useGetProductsQuery } from "@/services/product/productApi";

const Related = () => {
  const { data: productsData, isLoading: fetchingProducts } =
    useGetProductsQuery();
  const products = useMemo(() => productsData?.data || [], [productsData]);

  const swiperParams = {
    spaceBetween: 20,
    loop: true,
    onSlideChange: () => console.log("slide change"),
    onSwiper: (swiper) => console.log(swiper),
    breakpoints: {
      // when window width is >= 1024px (PC)
      1024: {
        slidesPerView: 4,
      },
      // when window width is >= 768px (Tablet)
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 320px (Mobile)
      320: {
        slidesPerView: 2,
      },
    },
    style: {
      padding: "10px !important",
    },
  };

  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-row gap-x-4 items-center">
        <hr className="h-1 w-full border-dashed border-black" />
        <h1 className="whitespace-nowrap uppercase font-semibold">
          Related Products
        </h1>
        <hr className="h-1 w-full border-dashed border-black" />
      </div>
      <div className="w-full">
        <Swiper {...swiperParams}>
          {fetchingProducts ? (
            <>
              {[1, 2, 3, 4].map((index) => (
                <SwiperSlide key={index}>
                  <GrubSkeleton key={index} />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {products.slice(-8)?.map((product) => (
                <SwiperSlide key={product?._id}>
                  <Grub product={product} />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Related;
