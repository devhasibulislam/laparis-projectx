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
  Avatar,
  AvatarIcon,
  Button,
  Divider,
  Link,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { GiArchiveRegister } from "react-icons/gi";
import { RiDeviceRecoverLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import OutsideClick from "@/components/OutsideClick";
import Modal from "@/components/Modal";
import Search from "@/components/Search";
import Cart from "@/components/Cart";
import Favorites from "@/components/Favorites";
import { usePathname, useRouter } from "next/navigation";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Recover from "@/components/Recover";
import { useSelector } from "react-redux";
import Checkout from "@/components/Checkout";
import UserOption from "@/components/UserOption";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="max-w-7xl mx-auto p-4">
      <nav className="flex flex-row items-center justify-between">
        {/* logo section */}
        <Image
          src="/logo.png"
          alt="logo"
          height={80}
          width={160}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        {/* menu items */}
        <div className="md:flex md:flex-row md:gap-x-2 hidden">
          <Link
            href="/men-items"
            className={`border-b border-solid border-transparent hover:border-black hover:text-black ${
              pathname === "/men-items" ? "border-black text-black" : ""
            }`}
          >
            Men Items
          </Link>
          <Divider orientation="vertical" className="h-5 my-auto" />
          <Link
            href="/women-items"
            className={`border-b border-solid border-transparent hover:border-black hover:text-black ${
              pathname === "/women-items" ? "border-black text-black" : ""
            }`}
          >
            Women Items
          </Link>
          <Divider orientation="vertical" className="h-5 my-auto" />
          <Link
            href="/printed-t-shirts"
            className={`border-b border-solid border-transparent hover:border-black hover:text-black ${
              pathname === "/printed-t-shirts" ? "border-black text-black" : ""
            }`}
          >
            Printed T-Shirts
          </Link>
        </div>

        {/* action items */}
        <div className="md:flex md:flex-row md:gap-x-2.5 hidden">
          <SearchProducts />
          <MyCart />
          <MyFavorites />
          <AuthMenu />
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
};

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative md:hidden">
      {/* mobile menu */}
      <Tooltip content="Menu">
        <button
          className="p-1 rounded-full border md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MdMenu className="h-5 w-5" />
        </button>
      </Tooltip>

      {/* mobile items */}
      {showMenu && (
        <OutsideClick onOutsideClick={() => setShowMenu(false)}>
          <div className="absolute top-3/4 mt-2 border rounded right-0 bg-white w-fit p-4 flex flex-col gap-y-2 z-50">
            <div className="flex flex-col gap-y-1">
              <Link
                href="/men-items"
                className={`text-sm ${
                  pathname === "/men-items" && "font-semibold"
                }`}
                size="md"
              >
                Men Items
              </Link>
              <Link
                href="/women-items"
                className={`text-sm ${
                  pathname === "/women-items" && "font-semibold"
                }`}
                size="md"
              >
                Women Items
              </Link>
              <Link
                href="/printed-t-shirts"
                className={`text-sm whitespace-nowrap ${
                  pathname === "/printed-t-shirts" && "font-semibold"
                }`}
                size="md"
              >
                Printed T-Shirts
              </Link>
            </div>
            <Divider orientation="horizontal" className="" />
            <div className="flex flex-col gap-y-1">
              <SearchProducts />
              <MyCart />
              <MyFavorites />
              <AuthMenu />
            </div>
          </div>
        </OutsideClick>
      )}
    </div>
  );
}

function AuthMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserOption, setUserShowOption] = useState(false);
  const user = useSelector((state) => state.user);
  const auth = useMemo(() => user.auth || {}, [user]);
  const router = useRouter();

  return (
    <div className="relative">
      <Tooltip content="Auth">
        <button
          className="md:p-1 md:border rounded-full flex flex-row items-center gap-x-1 text-sm"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiUser className="h-5 w-5" />
          <span className="md:hidden">Auth</span>
        </button>
      </Tooltip>

      {showMenu && (
        <OutsideClick onOutsideClick={() => setShowMenu(false)}>
          <div className="absolute top-full mt-2 right-0 h-fit w-fit py-2 px-4 bg-white z-50 border flex flex-col gap-y-2 rounded">
            {Object.keys(auth).length > 0 ? (
              <>
                {auth?.role === "admin" && (
                  <button
                    className="flex flex-row items-center gap-x-2"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    <Avatar
                      icon={<AvatarIcon />}
                      className="w-5 h-5 text-tiny"
                    />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {auth?.name.replace(/(\w+)\s(\w)\w*/, "$1 $2")}.
                    </span>
                  </button>
                )}

                {auth?.role === "user" && (
                  <button
                    className="flex flex-row items-center gap-x-2"
                    onClick={() => setUserShowOption(!showUserOption)}
                  >
                    <Avatar
                      icon={<AvatarIcon />}
                      className="w-5 h-5 text-tiny"
                    />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {auth?.name.replace(/(\w+)\s(\w)\w*/, "$1 $2")}.
                    </span>
                  </button>
                )}

                {showUserOption && (
                  <Modal
                    className={"lg:w-3/5 md:w-3/4 w-5/6"}
                    isOpen={showUserOption}
                    onClose={() => setUserShowOption(false)}
                  >
                    <UserOption />
                  </Modal>
                )}

                <button
                  className="flex flex-row items-center gap-x-2"
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    window.location.reload();
                  }}
                >
                  <span className="p-0.5">
                    <CiLogout className="h-4 w-4" />
                  </span>{" "}
                  Logout
                </button>
              </>
            ) : (
              <>
                <UserLogin />
                <UserRegister />
                <UserRecover />
              </>
            )}
          </div>
        </OutsideClick>
      )}
    </div>
  );
}

function SearchProducts() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Tooltip content="Search">
        <button
          className="md:p-1 md:border rounded-full flex flex-row items-center gap-x-1 text-sm"
          onClick={() => setShowSearch(!showSearch)}
        >
          <IoSearchOutline className="h-5 w-5" />{" "}
          <span className="md:hidden">Search</span>
        </button>
      </Tooltip>
      {showSearch && (
        <Modal
          className={"lg:w-1/3 md:w-3/4 w-5/6"}
          isOpen={showSearch}
          onClose={() => setShowSearch(false)}
        >
          <Search />
        </Modal>
      )}
    </>
  );
}

function MyCart() {
  const [showCart, setShowCart] = useState(false);
  const [modalItem, setModalItem] = useState("cart");

  return (
    <>
      <Tooltip content="Cart">
        <button
          className="md:p-1 md:border rounded-full flex flex-row items-center gap-x-1 text-sm"
          onClick={() => setShowCart(!showCart)}
        >
          <IoCartOutline className="h-5 w-5" />{" "}
          <span className="md:hidden">Cart</span>
        </button>
      </Tooltip>
      {showCart && (
        <Modal
          className={"lg:w-3/5 md:w-3/4 w-5/6"}
          isOpen={showCart}
          onClose={() => setShowCart(false)}
        >
          <div className="w-full h-full flex flex-col gap-y-4">
            <div className="flex flex-row gap-x-2">
              <Button
                variant="bordered"
                size="sm"
                className={modalItem === "cart" && "bg-black text-white"}
                onPress={() => setModalItem("cart")}
              >
                Cart
              </Button>
              <Button
                variant="bordered"
                size="sm"
                className={modalItem === "checkout" && "bg-black text-white"}
                onPress={() => setModalItem("checkout")}
              >
                Checkout
              </Button>
            </div>

            {modalItem === "cart" ? (
              <Cart />
            ) : (
              <>
                <Checkout setModalItem={setModalItem} />
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

function MyFavorites() {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <>
      <Tooltip content="Favorites">
        <button
          className="md:p-1 md:border rounded-full flex flex-row items-center gap-x-1 text-sm"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          <MdFavoriteBorder className="h-5 w-5" />{" "}
          <span className="md:hidden">Favorites</span>
        </button>
      </Tooltip>
      {showFavorites && (
        <Modal
          className={"lg:w-1/3 md:w-3/4 w-5/6"}
          isOpen={showFavorites}
          onClose={() => setShowFavorites(false)}
        >
          <Favorites />
        </Modal>
      )}
    </>
  );
}

function UserRegister() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <button
        className="md:p-1 rounded-full flex flex-row items-center gap-x-1 text-sm"
        onClick={() => setShowRegister(!showRegister)}
      >
        <GiArchiveRegister className="h-5 w-5" /> Register
      </button>

      {showRegister && (
        <Modal
          className={"lg:w-1/3 md:w-3/4 w-5/6"}
          isOpen={showRegister}
          onClose={() => setShowRegister(false)}
        >
          <Register />
        </Modal>
      )}
    </>
  );
}

function UserLogin() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <button
        className="md:p-1 rounded-full flex flex-row items-center gap-x-1 text-sm"
        onClick={() => setShowLogin(!showLogin)}
      >
        <CiLogin className="h-5 w-5" /> Login
      </button>

      {showLogin && (
        <Modal
          className={"lg:w-1/3 md:w-3/4 w-5/6"}
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        >
          <Login />
        </Modal>
      )}
    </>
  );
}

function UserRecover() {
  const [showRecover, setShowRecover] = useState(false);

  return (
    <>
      <button
        className="md:p-1 rounded-full flex flex-row items-center gap-x-1 text-sm"
        onClick={() => setShowRecover(!showRecover)}
      >
        <RiDeviceRecoverLine className="h-5 w-5" /> Recover
      </button>

      {showRecover && (
        <Modal
          className={"lg:w-1/3 md:w-3/4 w-5/6"}
          isOpen={showRecover}
          onClose={() => setShowRecover(false)}
        >
          <Recover />
        </Modal>
      )}
    </>
  );
}

export default Header;

/**
 * Error: (0 , _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure) is not a function
 * https://github.com/nextui-org/nextui/discussions/1238
 */
