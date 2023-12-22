/**
 * Title: Write a program using JavaScript on Dashboard
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

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, User } from "@nextui-org/react";
import { IoMdMenu } from "react-icons/io";
import OutsideClick from "@/components/OutsideClick";

const Dashboard = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main className="h-screen w-screen">
      <section className="max-w-5xl mx-auto h-full flex flex-col gap-y-2 p-2">
        <header className="p-2 flex flex-row justify-between items-center">
          <User
            name="Jane Doe"
            description="Admin"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <button
            className="p-1 border border-black rounded-full md:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <IoMdMenu className="w-5 h-5" />
          </button>
        </header>
        <div className="grid grid-cols-12 gap-x-2 h-full overflow-hidden relative">
          <Sidebar />
          <div className="w-full h-full border rounded md:col-span-9 col-span-12 p-2 overflow-y-auto">
            {children}
          </div>

          {showSidebar && (
            <OutsideClick onOutsideClick={() => setShowSidebar(false)}>
              <aside className="absolute top-0 left-0 w-full h-full border rounded bg-white p-2 overflow-y-auto">
                This is sidebar!
              </aside>
            </OutsideClick>
          )}
        </div>
        <footer className="text-center p-2">
          &copy; {new Date().getFullYear()}. Laparis. All rights reserved.{" "}
          <Link href="https://bento.me/devhasibulislam" className="underline">
            @devhasibulislam
          </Link>
        </footer>
      </section>
    </main>
  );
};

export default Dashboard;
