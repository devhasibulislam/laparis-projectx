/**
 * Title: Write a program using JavaScript on Arrivals
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

import products from "@/data/products";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

const Arrivals = () => {
  function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }

  let tabs = [
    {
      _id: "men-items",
      label: "Men Items",
      products: [...products],
    },
    {
      _id: "women-items",
      label: "Women Items",
      products: [...products],
    },
    {
      _id: "printed-t-shirts",
      label: "Printed T-Shirts",
      products: [...products],
    },
  ];

  // call for random sorting
  tabs.forEach((tab) => shuffleArray(tab.products));

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row gap-x-4 items-center">
        <hr className="h-1 w-full border-dashed border-black" />
        <h1 className="whitespace-nowrap uppercase font-semibold">
          New Arrivals
        </h1>
        <hr className="h-1 w-full border-dashed border-black" />
      </div>

      <div className="flex w-full flex-col gap-y-6">
        <Tabs
          radius="none"
          aria-label="Dynamic tabs"
          items={tabs}
          classNames={{
            tabList: "mx-auto bg-transparent",
            cursor: "w-full shadow-none border border-black",
          }}
        >
          {(item) => (
            <Tab key={item._id} title={item.label}>
              <div className="grid grid-cols-4 gap-4">
                {item?.products?.slice(0, 8)?.map((product) => (
                  <Card key={product?._id} className="">
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
                      <p className="text-tiny uppercase font-bold line-clamp-1">
                        {product?.name}
                      </p>
                      <small className="text-default-500">
                        $<b>{product?.price}</b>
                      </small>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Tab>
          )}
        </Tabs>
        <Button
          href="/collections"
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
          className="w-fit mx-auto"
          radius="none"
        >
          Show More
        </Button>
      </div>
    </section>
  );
};

export default Arrivals;
