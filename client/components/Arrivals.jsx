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

import { Button, Link, Skeleton, Tab, Tabs } from "@nextui-org/react";
import React, { useMemo } from "react";
import Grub from "./Grub";
import { useGetProductsQuery } from "@/services/product/productApi";
import GrubSkeleton from "./GrubSkeleton";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";

const Arrivals = () => {
  const { data: productsData, isLoading: fetchingProducts } =
    useGetProductsQuery();
  const products = useMemo(() => productsData?.data || [], [productsData]);

  const { data: categoriesData, isLoading: fetchingCategories } =
    useGetCategoriesQuery();
  const categories = useMemo(
    () => categoriesData?.data || [],
    [categoriesData]
  );

  function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }

  let tabs = categories.map((category) => {
    return {
      _id: category._id,
      label: category.name,
      products: products.filter(
        (product) => product.category.name === category.name
      ),
    };
  });

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

      {fetchingCategories || fetchingProducts ? (
        <>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-row gap-x-3 w-full justify-center">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <GrubSkeleton key={index} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
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
                  <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
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
        </>
      )}
    </section>
  );
};

export default Arrivals;
