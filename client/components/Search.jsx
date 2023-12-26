/**
 * Title: Write a program using JavaScript on Search
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

import React, { useState, useMemo } from "react";
import Grub from "./Grub";
import { useGetProductsQuery } from "@/services/product/productApi";

const Search = () => {
  const { data, isLoading } = useGetProductsQuery();
  const [searchInput, setSearchInput] = useState("");
  
  const products = useMemo(() => {
    // Filter products based on name, category, and description
    return (data?.data || []).filter((product) => {
      const lowerCaseSearch = searchInput.toLowerCase();
      const lowerCaseName = product.name.toLowerCase();
      const lowerCaseCategory = product.category.name.toLowerCase();
      const lowerCaseDescription = product.description.toLowerCase();

      return (
        lowerCaseName.includes(lowerCaseSearch) ||
        lowerCaseCategory.includes(lowerCaseSearch) ||
        lowerCaseDescription.includes(lowerCaseSearch)
      );
    });
  }, [data, searchInput]);

  return (
    <section className="flex flex-col gap-y-8">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Type any product name, category, or description"
        className="w-full"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <GrubSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            {products.map((product) => (
              <Grub key={product?._id} product={product} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Search;
