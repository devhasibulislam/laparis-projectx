/**
 * Title: Write a program using JavaScript on ProductDetail
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

const ProductDetail = () => {
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
                {product?.size?.map((size) => (
                  <Radio value={size} key={size}>
                    {size}
                  </Radio>
                ))}
              </RadioGroup>
            </article>

            <div className="flex flex-col gap-y-4 mt-8">
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  min="1"
                  placeholder="Enter Quantity"
                  className="w-full"
                />
                <label
                  htmlFor="sticker"
                  className="w-full border border-black h-full relative flex items-center p-2"
                >
                  <span className="h-full w-full text-sm">
                    Choose Custom Sticker
                  </span>
                  <input
                    type="file"
                    name="sticker"
                    id="sticker"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
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

export default ProductDetail;
