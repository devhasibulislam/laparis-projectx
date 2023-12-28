/**
 * Title: Write a program using JavaScript on Checkout
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
 * Date: 27, December 2023
 */

import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Checkout = () => {
  const user = useSelector((state) => state.user.auth);
  const { register, handleSubmit } = useForm({ defaultValues: user });
  const totalPrice = user?.cart?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = (data) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row items-end gap-x-2 font-mono">
        <h1 className="text-sm">Total Price:</h1>
        <h2 className="text-xl font-semibold">
          <span className="text-xs">$</span>
          {totalPrice}
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(handleCheckout)}
        className="flex flex-col gap-y-4"
      >
        <label htmlFor="name" className="flex flex-col gap-y-1">
          <span className="text-sm">Your Full Name*</span>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            readOnly
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-y-1">
          <span className="text-sm">Your Valid Email*</span>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            readOnly
          />
        </label>
        <label htmlFor="phone" className="flex flex-col gap-y-1">
          <span className="text-sm">Your Phone Number*</span>
          <input
            type="tel"
            name="phone"
            id="phone"
            {...register("phone", { required: true })}
            readOnly
          />
        </label>
        <label htmlFor="address" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Your Address*</span>
          <input
            type="tel"
            name="address"
            id="address"
            placeholder="i.e. House No. 1, Road No. 1, Block No. 1"
            {...register("address", { required: true })}
          />
        </label>
        <button type="submit" className="py-2 bg-primary text-white">
          Pay Now
        </button>
      </form>
    </section>
  );
};

export default Checkout;
