/**
 * Title: Write a program using JavaScript on Banner
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

import { kaushanScript } from "@/app/fonts";
import { Image } from "@nextui-org/react";
import React from "react";

const Banner = () => {
  return (
    <section className="">
      <div className="flex md:flex-row flex-col items-center">
        <article
          className="bg-no-repeat md:w-1/2 w-full"
          style={{
            backgroundImage: "url(/banner/banner4.png)",
            backgroundPosition: "50% 30% !important",
          }}
        >
          <div className="border bg-white p-12 flex flex-col items-center justify-center gap-y-4">
            <h1
              className={kaushanScript.className + " " + "text-4xl text-center"}
            >
              The Women <br /> Collection
            </h1>
            <p className="text-center">
              Mauris at bibendum ex, sit amet ornare quam. Aenean interdum
              hendrerit lectus sagittis turpis sit amet neque varius.
            </p>
          </div>
        </article>
        <Image
          isZoomed
          isBlurred
          width={570}
          height={656}
          alt="Girl's Image with Zoom"
          src="/banner/banner1.png"
          radius="none"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4">
        <div className="w-full relative md:-mt-12">
          <Image
            isBlurred
            width={520}
            height={580}
            alt="Banner hero Image"
            src="/banner/banner3.png"
            radius="none"
          />
          <article className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-y-4 z-50">
            <h1 className={kaushanScript.className + " " + "text-3xl"}>
              Hello Summer
            </h1>
            <p className="uppercase">Hot Discount of the Week</p>
            <p className="text-sm w-1/2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              ratione aut soluta eum accusamus quibusdam facere aliquid.
            </p>
          </article>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
          <Image
            isZoomed
            isBlurred
            width={570}
            height={656}
            alt="Boy's Image with Zoom"
            src="/banner/banner2.png"
            radius="none"
          />
          <article className="flex flex-col gap-y-2">
            <h1
              className={kaushanScript.className + " " + "text-4xl text-center"}
            >
              The Men <br /> Collection
            </h1>
            <p className="text-center">
              Mauris at bibendum ex, sit amet ornare quam. Aenean interdum
              hendrerit lectus sagittis turpis sit amet neque varius.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Banner;
