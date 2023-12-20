/**
 * Title: Write a program using JavaScript on Brands
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Image } from "@nextui-org/react";

const Brands = () => {
  const brands = [
    "/brands/brand01.webp",
    "/brands/brand02.webp",
    "/brands/brand03.webp",
    "/brands/brand04.webp",
    "/brands/brand05.webp",
    "/brands/brand06.webp",
    "/brands/brand01.webp",
    "/brands/brand02.webp",
    "/brands/brand03.webp",
    "/brands/brand04.webp",
    "/brands/brand05.webp",
    "/brands/brand06.webp",
  ];

  return (
    <section>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {brands?.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Image
                isBlurred
                width={150}
                height={75}
                alt={"Brand Image with delay" + index}
                src={brand}
                radius="none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brands;
