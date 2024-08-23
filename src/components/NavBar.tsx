"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./../../public/LOGO.png";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import AppString from "./../constants/strings";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full px-4">
      <nav className="bg-white h-20 max-w-[1200px] flex mx-auto justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Picture of the author"
            height={120}
            width={142}
          />
          <PiLineVerticalThin
            size={24}
            className="text-subText hidden md:block "
          />
          <IoEllipsisHorizontal
            size={24}
            className="text-black hidden md:block"
          />
          <p className="text-black font-medium text-sm  hidden">
            {AppString.navbar.category}
          </p>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-4 mr-4">
            <li className="text-subText font-medium text-sm">
              {AppString.navbar.home.header}
            </li>
            <li className="text-subText font-medium text-sm">
              {AppString.navbar.shop.header}
            </li>
            <li className="text-subText font-medium text-sm">
              {AppString.navbar.about.header}
            </li>
            <li className="text-subText font-medium text-sm">
              {AppString.navbar.contact.header}
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <CiSearch size={16} className="text-black" />
            <BsCart2 size={16} className="text-black" />
            <button className="bg-secondaryButton text-black w-[100px] py-3 font-bold px-6 mx-auto rounded-lg text-xs">
              {AppString.button.signIn}
            </button>
            <button className="bg-primary text-black font-bold w-[100px] text-xs px-6 py-3 mx-auto rounded-lg">
              {AppString.button.register}
            </button>
          </div>
        </div>
        <div onClick={handleNav} className="flex items-center md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </nav>
      <div
        className={
          nav
            ? "fixed left-0 top-0 bg-white w-[80%] md:[60%] h-full shadow-lg ease-in-out duration-500  md:hidden"
            : "ease-in-out duration-500 fixed left-[-100%]  md:hidden"
        }
      >
        <div className="flex p-4">
          <Image
            src={logo}
            alt="Picture of the author"
            height={120}
            width={142}
          />
          <PiLineVerticalThin size={24} className="text-subText" />
          <IoEllipsisHorizontal size={24} className="text-black" />
        </div>
        <div>
          <ul className="mt-10">
            <li className="text-subText font-medium text-sm p-4 border-b border-gray-600">
              {AppString.navbar.home.header}
            </li>
            <li className="text-subText font-medium text-sm p-4 border-b border-gray-600">
              {AppString.navbar.shop.header}
            </li>
            <li className="text-subText font-medium text-sm p-4 border-b border-gray-600">
              {AppString.navbar.about.header}
            </li>
            <li className="text-subText font-medium text-sm p-4 border-b border-gray-600">
              {AppString.navbar.contact.header}
            </li>
          </ul>
          <div className="flex p-4 gap-2">
            <button className="bg-secondaryButton text-black w-[50%] py-3 font-bold px-6 mx-auto rounded-lg text-xs">
              {AppString.button.signIn}
            </button>
            <button className="bg-primary text-black font-bold w-[50%] text-xs px-6 py-3 mx-auto rounded-lg">
              {AppString.button.register}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
