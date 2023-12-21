/**
 * Title: Write a program using JavaScript on Header
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

"use client";

import {
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="max-w-7xl mx-auto p-4">
      <nav className="flex flex-row items-center justify-between relative">
        {/* logo section */}
        <Image
          isBlurred
          src="/logo.png"
          alt="logo"
          height={80}
          width={160}
          className=""
        />

        {/* menu items */}
        <div className="md:flex md:flex-row md:gap-x-2 hidden">
          <Link
            href="/men-items"
            className="border-b border-solid border-transparent hover:border-black hover:text-black"
          >
            Men Items
          </Link>
          <Divider orientation="vertical" className="h-5 my-auto" />
          <Link
            href="/women-items"
            className="border-b border-solid border-transparent hover:border-black hover:text-black"
          >
            Women Items
          </Link>
          <Divider orientation="vertical" className="h-5 my-auto" />
          <Link
            href="/printed-t-shirts"
            className="border-b border-solid border-transparent hover:border-black hover:text-black"
          >
            Printed T-Shirts
          </Link>
        </div>

        {/* action items */}
        <div className="md:flex md:flex-row md:gap-x-2.5 hidden">
          <Tooltip content="Search">
            <button className="p-1 rounded-full border">
              <IoSearchOutline className="h-5 w-5" />
            </button>
          </Tooltip>
          <Tooltip content="Cart">
            <button className="p-1 rounded-full border">
              <IoCartOutline className="h-5 w-5" />
            </button>
          </Tooltip>
          <Tooltip content="Favorites">
            <button className="p-1 rounded-full border">
              <MdFavoriteBorder className="h-5 w-5" />
            </button>
          </Tooltip>
          <Dropdown>
            <DropdownTrigger>
              <Tooltip content="Auth">
                <button className="p-1 rounded-full border">
                  <FiUser className="h-5 w-5" />
                </button>
              </Tooltip>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="z-50">
              <DropdownItem key="login">Login</DropdownItem>
              <DropdownItem key="register">Register</DropdownItem>
              <DropdownItem key="recover">Recover</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        {/* mobile menu */}
        <Tooltip content="Menu">
          <button
            className="p-1 rounded-full border md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <RxCross2 className="h-5 w-5" />
            ) : (
              <MdMenu className="h-5 w-5" />
            )}
          </button>
        </Tooltip>

        {/* mobile items */}
        {showMenu && (
          <div className="absolute top-3/4 border rounded right-0 bg-white w-fit p-4 flex flex-col gap-y-2 z-50">
            <div className="flex flex-col gap-y-1">
              <Link href="/men-items" className="" size="md">
                Men Items
              </Link>
              <Link href="/women-items" className="" size="md">
                Women Items
              </Link>
              <Link href="/printed-t-shirts" className="" size="md">
                Printed T-Shirts
              </Link>
            </div>
            <Divider orientation="horizontal" className="" />
            <div className="flex flex-col gap-y-1">
              <span className="rounded-full flex flex-row items-center gap-x-1">
                <IoSearchOutline className="h-5 w-5" /> Search
              </span>
              <span className="rounded-full flex flex-row items-center gap-x-1">
                <IoCartOutline className="h-5 w-5" /> Cart
              </span>
              <span className="rounded-full flex flex-row items-center gap-x-1">
                <MdFavoriteBorder className="h-5 w-5" /> Favorites
              </span>
              <span className="rounded-full flex flex-row items-center gap-x-1">
                <FiUser className="h-5 w-5" /> Login
              </span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

/**
 * Error: (0 , _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure) is not a function
 * https://github.com/nextui-org/nextui/discussions/1238
 */
