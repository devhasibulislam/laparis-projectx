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

import Grub from "@/components/Grub";
import GrubSkeleton from "@/components/GrubSkeleton";
import ProductFilter from "@/components/ProductFilter";
import Main from "@/layouts/main/Main";
import { useGetProductsQuery } from "@/services/product/productApi";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const filter = useSelector((state) => state.filter);
  const { data: productsData, isLoading: fetchingProducts } =
    useGetProductsQuery();
  const allProducts = useMemo(() => productsData?.data || [], [productsData]);

  // Filter products based on size and category
  const products = useMemo(() => {
    if (!filter.size && !filter.category) {
      return allProducts; // No filters applied, return all products
    }

    return allProducts.filter((product) => {
      const sizeCondition =
        !filter.size || product?.sizes.includes(filter.size);
      const categoryCondition =
        !filter.category || product?.category?._id === filter.category;

      return sizeCondition && categoryCondition;
    });
  }, [allProducts, filter]);

  return (
    <Main>
      <section className="max-w-5xl mx-auto px-4 py-20 flex flex-col gap-y-20">
        <div className="grid grid-cols-12 gap-4 relative">
          <ProductFilter />
          <div className="lg:col-span-9 md:col-span-8 col-span-12">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
              {fetchingProducts ? (
                <>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <GrubSkeleton key={index} />
                  ))}
                </>
              ) : (
                <>
                  {products?.map((product) => (
                    <Grub key={product?._id} product={product} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Page;
