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
 * Date: 22, December 2023
 */

"use client";

import Dashboard from "@/layouts/dashboard/Dashboard";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Dashboard>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="flex flex-col gap-y-4"
      >
        <div className="flex flex-row gap-x-2 items-center md:w-3/4 w-full">
          <label
            htmlFor="thumbnail"
            className="w-full border border-black h-full relative flex items-center p-2"
          >
            <span className="h-full w-full text-sm">
              Choose Product Thumbnail
            </span>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              {...register("thumbnail", { required: true })}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
          <label
            htmlFor="gallery"
            className="w-full border border-black h-full relative flex items-center p-2"
          >
            <span className="h-full w-full text-sm">
              Choose Product Gallery
            </span>
            <input
              type="file"
              name="gallery"
              id="gallery"
              {...register("gallery", { required: true })}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
        </div>

        <label htmlFor="name" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Product Name</span>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            placeholder="i.e. Hasibul Islam"
            className="md:w-3/4 w-full"
          />
        </label>

        <label htmlFor="description" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Product Description</span>
          <textarea
            name="description"
            id="description"
            rows={5}
            {...register("description", { required: true })}
            placeholder="i.e. https://devhasibulislam.vercel.app"
            className="md:w-3/4 w-full"
          />
        </label>

        <label htmlFor="price" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Product Price</span>
          <input
            type="number"
            name="price"
            id="price"
            min={1}
            {...register("price", { required: true })}
            placeholder="i.e. $250"
            className="md:w-3/4 w-full"
          />
        </label>

        <div className="flex lg:flex-row flex-col gap-4 md:w-3/4 w-full">
          <label htmlFor="category" className="flex flex-col gap-y-1 w-full">
            <span className="text-sm">Choose Product Category</span>
            <select
              name="category"
              id="category"
              className="w-full"
              {...register("category", { required: true })}
            >
              <option value="printed-t-shirt">Printed T-Shirt</option>
              <option value="women-item">Women Item</option>
              <option value="men-items">Men Item</option>
            </select>
          </label>
          <label
            htmlFor="size"
            className="flex flex-col gap-y-1 w-full"
            {...register("size", { required: true })}
          >
            <span className="text-sm">Choose Product Size</span>
            <select name="size" id="size" className="w-full">
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          className="py-2 bg-primary text-white md:w-3/4 w-full"
        >
          Create Product
        </button>
      </form>
    </Dashboard>
  );
};

export default Page;
