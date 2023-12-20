/**
 * Title: Write a program using JavaScript on Footer
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
 * Date: 19, December 2023
 */

import { Divider, Link, Tooltip } from "@nextui-org/react";
import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto lg:px-10 md:px-8 px-4 py-8 bg-gray-100 rounded">
      <div className="flex md:flex-row flex-col flex-wrap gap-8 justify-between">
        <div className="flex flex-col gap-y-4">
          <h5 className="text-xl font-bold">Features</h5>
          <ul className="list-none flex flex-col gap-y-1.5">
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Cool stuff
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Random feature
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Team feature
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Stuff for developers
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Another one
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Last time
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h5 className="text-xl font-bold">Resources</h5>
          <ul className="list-none flex flex-col gap-y-1.5">
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Resource
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Resource name
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Another resource
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Final resource
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h5 className="text-xl font-bold">About</h5>
          <ul className="list-none flex flex-col gap-y-1.5">
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Team
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Locations
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Privacy
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h5 className="text-xl font-bold">Help</h5>
          <ul className="list-none flex flex-col gap-y-1.5">
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Support
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Help Center
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="border-b border-solid border-transparent hover:border-black hover:text-black"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h5 className="text-xl font-bold sm:text-center xl:text-left">
            Stay connected
          </h5>
          <div className="flex sm:justify-center xl:justify-start">
            <Tooltip content="Facebook" placement="bottom">
              <Link
                href="https://www.facebook.com/devhasibulislam"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 flex flex-row items-center justify-center"
              >
                <TfiFacebook className="h-5 w-5" />
              </Link>
            </Tooltip>
            <Tooltip content="Twitter" placement="bottom">
              <Link
                href="https://twitter.com/devhasibulislam"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 flex flex-row items-center justify-center"
              >
                <RiTwitterXLine className="h-5 w-5" />
              </Link>
            </Tooltip>
            <Tooltip content="Gmail" placement="bottom">
              <Link
                href="mailto:devhasibulislam@gmail.com"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 flex flex-row items-center justify-center"
              >
                <IoLogoGoogle className="h-5 w-5" />
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>

      <Divider className="my-4" />

      <p className="text-xs text-gray-500 text-center">
        &copy; {year}. Laparis. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
