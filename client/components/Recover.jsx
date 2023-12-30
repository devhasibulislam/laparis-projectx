/**
 * Title: Write a program using JavaScript on Recover
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

import { useRecoverMutation } from "@/services/auth/authApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Recover = () => {
  const { register, handleSubmit, reset } = useForm();
  const [recover, { isLoading, data, error }] = useRecoverMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...", { id: "recover" });
    }
    if (data) {
      toast.success(data?.description, { id: "recover" });
      reset();
    }
    if (error?.data) {
      toast.error(error?.data?.description || "Something went wrong", {
        id: "recover",
      });
    }
  }, [isLoading, data, error, reset]);

  const handleRecover = (data) => {
    recover(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRecover)}
      className="flex flex-col gap-y-4"
    >
      <label htmlFor="email" className="flex flex-col gap-y-1">
        <span className="text-sm">Enter Your Email</span>
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="i.e. devhasibulislam@gmail.com"
          className=""
        />
      </label>
      <label htmlFor="password" className="flex flex-col gap-y-1">
        <span className="text-sm">Enter Your Password</span>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", { required: true })}
          placeholder="i.e. Hasib@123"
          className=""
        />
      </label>
      <button type="submit" className="py-2 bg-primary text-white">
        Recover
      </button>
    </form>
  );
};

export default Recover;
