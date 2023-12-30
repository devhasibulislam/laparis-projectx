/**
 * Title: Write a program using JavaScript on Favorites
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

import React from "react";
import Grub from "./Grub";
import { useSelector } from "react-redux";

const Favorites = () => {
  const user = useSelector((state) => state.user.auth);

  return user?.favorites?.length === 0 || Object.keys(user).length === 0 ? (
    <>
      <p className="text-center">No Products Added!</p>
    </>
  ) : (
    <>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {user?.favorites?.map((product) => (
          <Grub key={product?._id} product={product} />
        ))}
      </section>
    </>
  );
};

export default Favorites;
