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

import { Divider, Link } from "@nextui-org/react";
import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto p-8 bg-gray-100 rounded">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Cool stuff
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Random feature
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team feature
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Stuff for developers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another one
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Last time
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource name
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another resource
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Final resource
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Locations
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Privacy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Support
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <Link
                href="https://www.facebook.com/devhasibulislam"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 flex flex-row items-center justify-center"
              >
                <TfiFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/devhasibulislam"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 flex flex-row items-center justify-center"
              >
                <RiTwitterXLine className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:devhasibulislam@gmail.com"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 flex flex-row items-center justify-center"
              >
                <IoLogoGoogle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Divider className="lg:mt-0 mt-4 mb-4" />

      <p className="text-xs text-gray-500 text-center">
        &copy; {year}. Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
