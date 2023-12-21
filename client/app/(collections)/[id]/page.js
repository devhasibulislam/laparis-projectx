/**
 * Title: Write a program using JavaScript on Page
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

"use client";

import product from "@/data/product";
import Main from "@/layouts/main/Main";
import {
  Button,
  Divider,
  Image,
  Radio,
  RadioGroup,
  Tooltip,
} from "@nextui-org/react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Zoom from "react-img-zoom";
import { MdFavoriteBorder } from "react-icons/md";
import Related from "@/components/Related";
import MostLiked from "@/components/MostLiked";
import Brands from "@/components/Brands";

const Page = () => {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState(product?.thumbnail);

  console.log(id);
  console.log(imageSrc);

  return (
    <Main>
      <section className="max-w-5xl mx-auto px-4 py-20 flex flex-col gap-y-20">
        <div className="grid grid-cols-12 lg:gap-x-0 gap-4">
          <div className="md:col-span-5 col-span-12 flex flex-row gap-x-2">
            <div className="flex flex-col gap-y-2">
              {product?.gallery?.map((item, index) => (
                <Image
                  isBlurred
                  height={50}
                  width={50}
                  src={item}
                  alt={item}
                  key={index}
                  radius="none"
                  onClick={() => setImageSrc(item)}
                  className="cursor-pointer"
                />
              ))}
            </div>
            <Zoom
              height={385}
              width={300}
              img={imageSrc}
              alt={imageSrc}
              zoomScale={1.2}
              transitionTime={0.5}
              className="w-full h-full"
              key={imageSrc}
            />
          </div>
          <div className="md:col-span-7 col-span-12 flex flex-col gap-y-4">
            <h1 className="text-3xl capitalize font-bold">{product?.name} </h1>
            <article className="flex flex-col gap-y-4">
              <p className="text-base">{product?.description}</p>
              <Divider />
              <div className="flex flex-row gap-x-2 capitalize">
                <span className="text-base flex flex-row gap-x-0.5">
                  $<b>{product?.price}</b>
                </span>{" "}
                <Divider orientation="vertical" /> {product?.category}
              </div>
              <RadioGroup label="Select a Size" orientation="horizontal">
                {product?.size?.map((item) => (
                  <Radio key={item} value={item} className="uppercase">
                    {item}
                  </Radio>
                ))}
              </RadioGroup>
            </article>

            <div className="flex flex-col gap-y-4 mt-8">
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      Click to upload
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Select <b>Front & Back Part</b> of your sticker
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>

              <div className="flex flex-row gap-x-2">
                <Button
                  radius="none"
                  size="md"
                  color="primary"
                  className="w-full"
                >
                  Add to Cart
                </Button>
                <Tooltip content="Add to Favorite">
                  <Button
                    isIconOnly
                    aria-label="Favorite"
                    color="primary"
                    size="md"
                    radius="none"
                  >
                    <MdFavoriteBorder className="h-5 w-5" />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <Related />
        <MostLiked />
        <Brands />
      </section>
    </Main>
  );
};

export default Page;
