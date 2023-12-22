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

  const handleAddCategory = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Dashboard>
      <form
        onSubmit={handleSubmit(handleAddCategory)}
        className="flex flex-col gap-y-4"
      >
        <label htmlFor="name" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Category Name</span>
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
          <span className="text-sm">Enter Category Description</span>
          <textarea
            name="description"
            id="description"
            {...register("description", { required: true })}
            placeholder="i.e. https://devhasibulislam.vercel.app"
            className="md:w-3/4 w-full"
          />
        </label>

        <button type="submit" className="py-2 bg-primary text-white md:w-3/4 w-full">
          Create Category
        </button>
      </form>
    </Dashboard>
  );
};

export default Page;
