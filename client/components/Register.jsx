/**
 * Title: Write a program using JavaScript on Register
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

import { useRegisterMutation } from "@/services/auth/authApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const [signup, { isLoading, data, error }] = useRegisterMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...", { id: "register" });
    }
    if (data) {
      toast.success(data?.description, { id: "register" });
      reset();
    }
    if (error?.data) {
      toast.error(error?.data?.description || "Something went wrong", {
        id: "register",
      });
    }
  }, [isLoading, data, error, reset]);

  const handleRegister = (data) => {
    signup(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="flex flex-col gap-y-4"
    >
      <label htmlFor="name" className="flex flex-col gap-y-1">
        <span className="text-sm">Your Full Name*</span>
        <input
          type="text"
          name="name"
          id="name"
          {...register("name", { required: true })}
          placeholder="i.e. Hasibul Islam"
          className=""
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-y-1">
        <span className="text-sm">Your Valid Email*</span>
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
        <span className="text-sm">Your Strong Password*</span>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", { required: true })}
          placeholder="i.e. Hasib@123"
          className=""
        />
      </label>
      <label htmlFor="phone" className="flex flex-col gap-y-1">
        <span className="text-sm">Your Phone Number*</span>
        <input
          type="tel"
          name="phone"
          id="phone"
          {...register("phone", { required: true })}
          placeholder="Phone Number with Country Code"
          className=""
        />
      </label>
      <button type="submit" className="py-2 bg-primary text-white">
        Register
      </button>
    </form>
  );
};

export default Register;
