/**
 * Title: Write a program using JavaScript on Sidebar
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

import { Link } from "@nextui-org/react";
import React from "react";
import routes from "./routes";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full h-full border rounded md:col-span-3 p-4 overflow-y-auto md:block hidden">
      <div className="flex flex-col h-full">
        <div className="flex flex-col gap-y-4">
          {routes?.map((route) => (
            <Link
              key={route.pathName}
              href={route.href}
              className={`border-b border-solid border-transparent hover:border-black hover:text-black w-fit ${
                pathname === route.href ? "border-black text-black" : ""
              }`}
            >
              {route.pathName}
            </Link>
          ))}
        </div>
        <Link href="/" className="mt-auto">
          Got to Home
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
