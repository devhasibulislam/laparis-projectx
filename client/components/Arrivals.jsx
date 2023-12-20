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
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";
import React from "react";
import Grub from "./Grub";

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
                  <Grub key={product?._id} product={product} />
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
