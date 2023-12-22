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

import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = ({ children }) => {
  return (
    <main className="h-screen w-screen">
      <section className="max-w-5xl mx-auto h-full flex flex-col gap-y-2 p-2">
        <header className="border p-2">This is a header!</header>
        <div className="grid grid-cols-12 gap-x-2 h-full overflow-hidden relative">
          <Sidebar />
          <div className="w-full h-full border col-span-9 p-2 overflow-y-auto">
            {children}
          </div>
        </div>
        <footer className="border p-2">This is a footer!</footer>
      </section>
    </main>
  );
};

export default Dashboard;
