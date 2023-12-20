/**
 * Title: Write a program using JavaScript on Grub
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

import React from "react";
import { Card, CardBody, CardHeader, Image, Tooltip } from "@nextui-org/react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

const Grub = ({ product }) => {
  return (
    <>
      <Card className="">
        <CardHeader className="relative group">
          <Image
            isZoomed
            isBlurred
            alt="Card background"
            className="object-cover rounded-xl"
            src={product?.thumbnail}
            width={270}
          />

          <div className="absolute top-6 left-6 w-full h-fit z-50 flex flex-row gap-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Tooltip showArrow={true} content="Add to Favorite">
              <button className="p-1 bg-white shadow border border-black rounded-full">
                <MdFavoriteBorder className="h-4 w-4" />
              </button>
            </Tooltip>
            <Tooltip showArrow={true} content="Add to Cart">
              <button className="p-1 bg-white shadow border border-black rounded-full">
                <MdAddShoppingCart className="h-4 w-4" />
              </button>
            </Tooltip>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-tiny font-bold line-clamp-1">
            {product?.name}
          </p>
          <small className="text-default-500">
            $<b>{product?.price}</b>
          </small>
        </CardBody>
      </Card>
    </>
  );
};

export default Grub;
