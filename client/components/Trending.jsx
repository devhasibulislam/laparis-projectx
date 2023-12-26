/**
 * Title: Write a program using JavaScript on Trending
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

import { kaushanScript } from "@/app/fonts";
import React, { useMemo } from "react";
import Grub from "./Grub";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetProductsQuery } from "@/services/product/productApi";
import GrubSkeleton from "./GrubSkeleton";

const Trending = () => {
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
        slidesPerView: 2,
      },
      // when window width is >= 320px (Mobile)
      320: {
        slidesPerView: 1,
      },
    },
    style: {
      padding: "10px !important",
    },
  };

  return (
    <section
      className="container mx-auto bg-no-repeat lg:p-20 md:p-10 p-5"
      style={{ backgroundImage: "url(/bg.webp)" }}
    >
      <div className="h-full w-full grid grid-cols-10 items-center gap-4">
        <article className="md:col-span-3 col-span-10">
          <h1 className={`${kaushanScript.className} text-3xl`}>
            Trending Now
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            labore!
          </p>
        </article>

        <div className="md:col-span-7 col-span-10 w-full">
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
                {products?.map((product) => (
                  <SwiperSlide key={product?._id}>
                    <Grub product={product} />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Trending;
