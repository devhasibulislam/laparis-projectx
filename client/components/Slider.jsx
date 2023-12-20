/**
 * Title: Write a program using JavaScript on Slider
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
import { Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { kaushanScript } from "@/app/fonts";

const Slider = () => {
  return (
    <section className="container mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full relative before:content[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/30 before:z-40">
            <Image
              isBlurred
              width={1620}
              height={700}
              alt="Slider Image with delay"
              src="/sliders/slider1.png"
              radius="none"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-y-4 z-50 text-white">
              <h1
                className={
                  kaushanScript.className +
                  " " +
                  "text-center lg:text-3xl md:text-2xl text-xl"
                }
              >
                Top Look-Book Jeans
              </h1>
              <h2 className="text-center lg:text-5xl md:text-4xl text-3xl uppercase font-bold">
                Trending in 2023
              </h2>
              <p className="w-1/2 text-center lg:text-base md:text-sm md:block hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                animi obcaecati molestiae totam fuga, doloribus perspiciatis
                exercitationem fugit neque, eaque cum alias omnis officia
                impedit sint consequuntur quisquam. Cumque, repudiandae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative before:content[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/30 before:z-40">
            <Image
              isBlurred
              width={1620}
              height={700}
              alt="Slider Image with delay"
              src="/sliders/slider2.png"
              radius="none"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-y-4 z-50 text-white">
              <h1
                className={
                  kaushanScript.className +
                  " " +
                  "text-center lg:text-3xl md:text-2xl text-xl"
                }
              >
                Best Selling Online Store
              </h1>
              <h2 className="text-center lg:text-5xl md:text-4xl text-3xl uppercase font-bold">
                Time to Shine
              </h2>
              <p className="w-1/2 text-center lg:text-base md:text-sm md:block hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                animi obcaecati molestiae totam fuga, doloribus perspiciatis
                exercitationem fugit neque, eaque cum alias omnis officia
                impedit sint consequuntur quisquam. Cumque, repudiandae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative before:content[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/30 before:z-40">
            <Image
              isBlurred
              width={1620}
              height={700}
              alt="Slider Image with delay"
              src="/sliders/slider3.png"
              radius="none"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-y-4 z-50 text-white">
              <h1
                className={
                  kaushanScript.className +
                  " " +
                  "text-center lg:text-3xl md:text-2xl text-xl"
                }
              >
                Welcome To
              </h1>
              <h2 className="text-center lg:text-5xl md:text-4xl text-3xl uppercase font-bold">
                Laparis Super Theme
              </h2>
              <p className="w-1/2 text-center lg:text-base md:text-sm md:block hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                animi obcaecati molestiae totam fuga, doloribus perspiciatis
                exercitationem fugit neque, eaque cum alias omnis officia
                impedit sint consequuntur quisquam. Cumque, repudiandae.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
