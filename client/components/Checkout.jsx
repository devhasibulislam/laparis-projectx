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

"use client";

import {
  useCreateOrderMutation,
  useVerifyOrderMutation,
} from "@/services/payment/paymentApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Checkout = () => {
  const user = useSelector((state) => state.user.auth);
  const { register, handleSubmit } = useForm({ defaultValues: user });
  const [
    createOrder,
    { isLoading: orderCreating, data: orderData, error: orderError },
  ] = useCreateOrderMutation();
  const [
    verifyOrder,
    { isLoading: orderVerifying, data: verifiedData, error: verificationError },
  ] = useVerifyOrderMutation();

  const totalPrice = user?.cart?.reduce((sum, item) => sum + item.price, 0);

  async function verifyPayment(data) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.log(res);
      alert("Razropay failed to load!!");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Laparis ProjectX",
      description: "Test Transaction",
      image:
        "https://raw.githubusercontent.com/devhasibulislam/laparis-projectx/master/client/public/laparis-projectx.png",
      order_id: data.id,
      handler: function (response) {
        try {
          verifyOrder(response);
        } catch (error) {
          console.error(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  useEffect(() => {
    if (orderCreating) {
      toast.loading("Creating your order...", { id: "createOrder" });
    }

    if (orderData) {
      toast.success(orderData?.description, { id: "createOrder" });

      if (orderData.data) {
        verifyPayment(orderData.data);
      }
    }

    if (orderError?.data) {
      toast.error(orderError?.data?.description || "Something went wrong", {
        id: "createOrder",
      });
    }

    if (orderVerifying) {
      toast.loading("Verifying your order...", { id: "verifyOrder" });
    }

    if (verifiedData) {
      toast.success(verifiedData?.description, { id: "verifyOrder" });
      console.log(verifiedData.data);
    }

    if (verificationError?.data) {
      toast.error(
        verificationError?.data?.description || "Something went wrong",
        {
          id: "verifyOrder",
        }
      );
    }
  }, [
    orderData,
    orderError,
    orderCreating,
    orderVerifying,
    verifiedData,
    verificationError,
    verifyPayment
  ]);

  const handleCheckout = (data) => {
    console.log(data);
    createOrder({ amount: totalPrice });
  };

  return user?.cart?.length === 0 ? (
    <>
      <p className="text-lg">No Products Added to Cart!</p>
    </>
  ) : (
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
