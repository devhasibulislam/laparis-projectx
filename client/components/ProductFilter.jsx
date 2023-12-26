/**
 * Title: Write a program using JavaScript on ProductFilter
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

import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Radio,
  RadioGroup,
  Skeleton,
  Tooltip,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { setCategory, setSize } from "@/features/filter/filterSlice";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import { LuTimerReset } from "react-icons/lu";

const ProductFilter = () => {
  const pathanme = usePathname();
  const dispatch = useDispatch();
  const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data, isLoading } = useGetCategoriesQuery();
  const categories = useMemo(() => data?.data || [], [data]);

  useEffect(() => {
    // Update Redux state when local state changes
    dispatch(setSize(selectedSize));
  }, [dispatch, selectedSize]);

  useEffect(() => {
    // Update Redux state when local state changes
    dispatch(setCategory(selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleReset = () => {
    // Clear both local and Redux state
    setSelectedSize(null);
    setSelectedCategory(null);
  };

  return (
    <aside className="lg:col-span-3 md:col-span-4 col-span-12">
      <div className="flex md:flex-col md:gap-y-8 md:sticky md:top-4 flex-row justify-between">
        <Tooltip
          showArrow
          radius="sm"
          defaultOpen
          placement="right"
          content="Reset Filter"
        >
          <Button
            isIconOnly
            variant="bordered"
            className="w-fit"
            onPress={handleReset}
            size="sm"
          >
            <LuTimerReset className="h-5 w-5" />
          </Button>
        </Tooltip>
        <RadioGroup
          label="Select a Size"
          value={selectedSize}
          onChange={handleSizeChange}
        >
          {sizes?.map((item) => (
            <Radio key={item} value={item} className="capitalize">
              {item}
            </Radio>
          ))}
        </RadioGroup>
        {!(
          pathanme === "/women-items" ||
          pathanme === "/men-items" ||
          pathanme === "/printed-t-shirts"
        ) && (
          <RadioGroup
            label="Select a Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {isLoading ? (
              <>
                <div className="flex flex-col gap-y-2">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <Skeleton key={idx} className="h-4 w-4/5 rounded-lg" />
                  ))}
                </div>
              </>
            ) : (
              <>
                {categories?.map((item) => (
                  <Radio key={item._id} value={item._id} className="capitalize">
                    {item.name}
                  </Radio>
                ))}
              </>
            )}
          </RadioGroup>
        )}
      </div>
    </aside>
  );
};

export default ProductFilter;
